import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './components/LandingPage/page';
import Home from './components/Home/page';
import AddProduct from './components/addProducts/page';
import Product from './components/products/page';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import PrivateRoute from './pages/auth/privateRoute';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Layout><Home /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <Layout><AddProduct /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Layout><Product /></Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
