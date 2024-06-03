import { Route, Routes } from "react-router-dom";
import "./styles.css";
import QrCodePage from "./pages/QrCodePage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ProductsPage />} />
        <Route path="/code" element={<QrCodePage />} />
      </Routes>
    </>
  );
};

export default App;
