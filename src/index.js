import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider, FilterContextProvider, ProductContextProvider, UserContextProvider, WishListContextProvider } from "./contexts";


// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <WishListContextProvider>
              <FilterContextProvider>
                <App />
              </FilterContextProvider>
            </WishListContextProvider>
          </ProductContextProvider>
        </AuthContextProvider>
      </UserContextProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
