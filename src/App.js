import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default App;
