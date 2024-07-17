import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AddressContextProvider,
  AuthContextProvider,
  CartContextProvider,
  FilterContextProvider,
  OrderContextProvider,
  ProductContextProvider,
  UserContextProvider,
  WishListContextProvider,
} from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductContextProvider>
          <FilterContextProvider>
            <AuthContextProvider>
              <AddressContextProvider>
                <CartContextProvider>
                  <WishListContextProvider>
                    <OrderContextProvider>
                      <App />
                    </OrderContextProvider>
                  </WishListContextProvider>
                </CartContextProvider>
              </AddressContextProvider>
            </AuthContextProvider>
          </FilterContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
