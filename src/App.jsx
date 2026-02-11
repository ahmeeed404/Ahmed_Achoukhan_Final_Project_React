import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import images from "./constant";
import CarouselHome from "./components/homeCarousel";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="homeCarousel" element={<CarouselHome />} />
    </Routes>
  );
}

export default App;
