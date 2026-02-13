import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "flowbite";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { BlogProvider } from './components/blog/blogContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <BlogProvider>   
        <App />
      </BlogProvider>
    </BrowserRouter>
  </StrictMode>
);
