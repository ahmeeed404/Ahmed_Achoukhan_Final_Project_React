import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
// import { footer } from "framer-motion/client";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="navbar" element={<Navbar />} />
    </Routes>
  );
}

export default App;
