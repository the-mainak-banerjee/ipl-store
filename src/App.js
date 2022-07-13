import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ProductPage } from "./pages";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default App;
