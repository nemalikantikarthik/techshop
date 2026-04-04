import { CssBaseline } from "@mui/material";
import "./App.css";
import { Header } from "./components/Header";
import { MainScrolling } from "./components/MainScrolling";
import { FeatureProducts } from "./components/FeatureProducts";
import TopProducts from "./components/TopProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Advantages } from "./components/Advantages";
import Footer from "./components/Footer";
import { SingleProduct } from "./components/SingleProduct";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainScrolling />
              <FeatureProducts />
              <TopProducts />
              <Advantages />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;