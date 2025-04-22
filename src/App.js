import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import MenuItems from "./components/MenuItems";
import PaymentInfo from "./components/PaymentInfo";
import Cart from "./components/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menuItems" element={<MenuItems />} />
        <Route path="/paymentInfo" element={<PaymentInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
