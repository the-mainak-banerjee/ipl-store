import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Cart, HomePage, Login, ProductDetailsPage, ProductPage, Signup } from "./pages";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:productId' element={<ProductDetailsPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
