import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Sale from "./pages/sale";
import Features from "./pages/featured";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import About from "./pages/about";
import Details from "./components/blog/detail";
import Signin from "./components/signUp/login";
import Signup from "./components/signUp/signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Sale" element={<Sale />} />
      <Route path="/featured" element={<Features />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
