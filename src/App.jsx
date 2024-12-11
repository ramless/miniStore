import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Импортируем React Router
import CatalogPage from "./pages/CatalogPage"; // Страница каталога
import CartPage from "./pages/CartPage"; // Страница корзины
import CheckoutPage from "./pages/CheckoutPage"; // Страница оформления заказа
import ProductDetailPage from "./pages/ProductDetailPage";  // Импортируем страницу товара
import Header from "./components/header/header";
import './App.scss'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Убедитесь, что здесь указан компонент */}
            </Routes>
        </Router>
    );
};

export default App;
