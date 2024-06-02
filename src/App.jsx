import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import WishList from "./pages/wishlist/WishList";
import Navbar from "./components/navbar/Navbar";
import Chart from "./pages/chart/Chart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </>
  );
}

export default App;
