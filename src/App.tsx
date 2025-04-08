import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Your layout that includes Navbar
import LandingPage from './components/LandingPage/page';
import Home from './components/Home/page';
import ProductList from './components/ProductList/page';
import AddProduct from './components/addProducts/page';
import EditProduct from './components/editProduct/page';
import Product from './components/products/page';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/productList"
          element={
            <Layout>
              <ProductList />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Layout>
              <EditProduct />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
