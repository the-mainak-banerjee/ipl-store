import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, PrivateRoute, RestrictedRoute } from "./components";
import { Cart, FourOFourPage, HomePage, Login, ProductDetailsPage, ProductPage, Profile, Signup, WishList } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ScrollToTop>
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
        <ToastContainer autoClose={1000}/>
      </ScrollToTop>
    </>
  );
}

export default App;
