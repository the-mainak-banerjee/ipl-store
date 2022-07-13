import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ProductPage } from "./pages";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
