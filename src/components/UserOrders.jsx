import React from "react";
import { useOrder } from "../contexts";
import { CartItems } from "./CartItems";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./PrimaryButton";

const UserOrders = () => {
  const { myOrders } = useOrder();

  return (
    <section>
      {myOrders?.map((item, idx) => {
        return (
          <div key={uuid()}>
            <h3 className="m-4 font-lora text-2xl">Order Number: {idx + 1}</h3>
            {item.orderItems.map((orderItem) => {
              return (
                <CartItems
                  key={orderItem.product._id}
                  id={orderItem.product._id}
                  product={orderItem.product}
                  src={orderItem.product.src}
                  name={orderItem.product.name}
                  description={orderItem.product.description}
                  price={orderItem.product.price}
                  discount={orderItem.product.discount}
                  qty={orderItem.product.qty}
                  showActions={false}
                />
              );
            })}
          </div>
        );
      })}
      {myOrders?.length === 0 && (
        <section className="w-full mt-2 font-poppins flex items-center justify-center">
          <div className="h-[60vh] flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold font-lora">
              Your Have Not Placed Any Order Yet
            </h3>
            <Link to="/products">
              <PrimaryButton>Explore Products</PrimaryButton>
            </Link>
          </div>
        </section>
      )}
    </section>
  );
};

export default UserOrders;
