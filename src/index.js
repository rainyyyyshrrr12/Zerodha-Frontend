import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// ✅ Importing all pages
import Homepg from './landing/home/Homepg';
import Signup from './landing/signup/Signup';
import Aboutpg from './landing/about/Aboutpg';
import Productpg from './landing/products/Productpg';
import Pricingpg from './landing/pricing/Pricingpg';
import Supportpg from './landing/support/Supportpg';

// ✅ Navbar and Footer
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './landing/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Homepg />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutpg />} />
      <Route path="/product" element={<Productpg />} />
      <Route path="/pricing" element={<Pricingpg />} />
      <Route path="/support" element={<Supportpg />} />
      <Route path="*" element={< NotFound/>} />
    </Routes>

    <Footer />
  </BrowserRouter>
);



