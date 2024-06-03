import { Route, Routes } from "react-router-dom";
import "./styles.css";
import QrCodePage from "./pages/QrCodePage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<QrCodePage />} />
        <Route path="/product" element={<ProductsPage />} />
      </Routes>
    </>
  );
};

export default App;
