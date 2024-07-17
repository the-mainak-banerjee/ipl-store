import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePageTitle } from "../../hooks";
import { ProductDetailsCard, ProductList, SubNavbar } from "../../components";
import axios from "axios";
import { API_URL } from "../../utils/helperVariables";

export const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  usePageTitle(`IPLStores-Products || ${product?.name}`);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/products/${params.productId}`
        );
        setProduct(response.data.data.product);
        const relatedProductsData = await axios.get(
          `${API_URL}/products?category=${response.data.data.product.category}`
        );
        const allRelatedProducts = relatedProductsData.data.data.products;
        allRelatedProducts.splice(0, 5);
        const productIndex = allRelatedProducts.findIndex(
          (item) => item._id === params.productId
        );
        allRelatedProducts.splice(productIndex, 1);
        setRelatedProducts(allRelatedProducts);
      } catch (e) {
        console.log(e);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <section>
        <SubNavbar pageName="Products" param={product?.name} />
      </section>
      {product ? (
        <ProductDetailsCard product={product} />
      ) : (
        <p className="text-center font-lora text-xl">No Product Found</p>
      )}
      {product && (
        <section className="py-10 px-4">
          <h3 className="text-center font-lora text-3xl">Related Products</h3>
          <ProductList products={relatedProducts.slice(0, 4)} />
        </section>
      )}
    </>
  );
};
