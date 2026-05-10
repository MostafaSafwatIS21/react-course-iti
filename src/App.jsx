import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import ProductList from "./components/ui/ProductList";
import Product from "./components/ui/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<h1>Shopping Cart</h1>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
