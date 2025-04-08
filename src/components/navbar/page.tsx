import React from "react";
import "./page.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Listora</h1>
      </div>
      <div className="navbar-center">
        <a href="/home" className="nav-link">Home</a>
        <a href="/products" className="nav-link">Products</a>
        <a href="/add" className="nav-link">Add Product</a>
      </div>
      <div className="navbar-right">
        <button className="logOut-btn">Log Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
