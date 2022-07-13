import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { HomePage, ProductDetailsPage, ProductPage } from "./pages";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:productId' element={<ProductDetailsPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
