import React from "react";
import { Package, Tag, AlertTriangle, Clock } from "lucide-react";
import "./page.css"; // Assuming styles are in this CSS file

const Dashboard = () => {
  return (
    <main className="dashboard-container">
      <h1 className="dashboard-heading">Welcome back, Lakshya 👋</h1>
      <p className="dashboard-subheading">Here's a quick overview of your product dashboard.</p>

      {/* Metrics Section */}
      <div className="metrics-grid">
        <div className="card">
          <Package className="icon blue" />
          <div>
            <p className="label">Total Products</p>
            <p className="value">12</p>
          </div>
        </div>
        <div className="card">
          <Tag className="icon green" />
          <div>
            <p className="label">Categories</p>
            <p className="value">3</p>
          </div>
        </div>
        <div className="card">
          <AlertTriangle className="icon yellow" />
          <div>
            <p className="label">Low Stock Items</p>
            <p className="value">2</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="manage-button" >Manage Products</button>
      <button className="manage-button">➕ Add Product</button>
        <button className="manage-button">🗂️ Add Category</button>

      {/* Product Summary */}
      <div className="summary-grid">
        {/* Recently Added */}
        <div className="summary-card">
          <div className="summary-header">
            <Clock className="icon gray" />
            <h2 className="summary-title">Recently Added Products</h2>
          </div>
          <ul className="summary-list">
            <li><strong>Paracetamol 500mg</strong> — 20 in stock</li>
            <li><strong>Amoxicillin 250mg</strong> — 10 in stock</li>
            <li><strong>Vitamin C Tablets</strong> — 5 in stock</li>
          </ul>
        </div>

        {/* Low Stock Alerts */}
        <div className="summary-card">
          <div className="summary-header">
            <AlertTriangle className="icon yellow" />
            <h2 className="summary-title">Low Stock Alerts</h2>
          </div>
          <ul className="summary-list">
            <li><strong>Vitamin C Tablets</strong> — Only 5 left</li>
            <li><strong>Ibuprofen 200mg</strong> — Only 2 left</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
