import { Route, Routes } from "react-router-dom";
import { Footer, Loading, Navbar, PrivateRoute, RestrictedRoute } from "./components";
import { FourOFourPage, Login, ProductDetailsPage, ProductPage, Signup } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import('./pages/home-page/HomePage'))
const Profile = React.lazy(() => import('./pages/userDetails-pages/Profile'))
const Cart = React.lazy(() => import('./pages/userDetails-pages/Cart'))
const WishList = React.lazy(() => import('./pages/userDetails-pages/WishList'))



function App() {
  return (
    <>
      <ScrollToTop>
      <Suspense fallback={<Loading/>}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='/products/:productId' element={<ProductDetailsPage/>}/>
          <Route element={<PrivateRoute />}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<WishList/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route element={<RestrictedRoute/>}>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
          <Route path='/*' element={<FourOFourPage/>}/>
        </Routes>
        <Footer/>
        <ToastContainer autoClose={1500} position='top-left'/>
      </Suspense>
      </ScrollToTop>
    </>
  );
}

export default App;
