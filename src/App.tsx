import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/page';
import LandingPage from './components/LandingPage/page';
import ProductList from './components/ProductList/page';
import AddProduct from './components/addProducts/page';
import EditProduct from './components/editProduct/page';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default App;
