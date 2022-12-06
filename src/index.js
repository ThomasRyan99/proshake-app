import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../src/routes/Menu';
import HomePage from '../src/routes/HomePage';
import AboutUs from '../src/routes/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< App/>} />
      <Route path="/HomePage" element={< HomePage/>} />
      <Route path="/Menu" element={< Menu />} />
      <Route path="/AboutUs" element={< AboutUs />} />
    </Routes>
  </BrowserRouter>
);