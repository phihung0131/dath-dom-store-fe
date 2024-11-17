import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import AuthHandler from "./pages/AuthHandler";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import OrdersList from "./pages/OrdersList";
import OrderDetail from "./pages/OrderDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/man" element={<Products />} />
        <Route path="/woman" element={<Products />} />
        <Route path="/kid" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<AuthHandler />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
