import React from "react";
import "./page.css";

const sampleProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    quantity: 20,
    expiry: "2025-12-31",
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    category: "Antibiotics",
    quantity: 10,
    expiry: "2024-11-15",
  },
  {
    id: 3,
    name: "Vitamin C Tablets",
    category: "Supplements",
    quantity: 5,
    expiry: "2024-07-10",
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-heading">Product Inventory</h1>
      <p className="products-subheading">Manage all your listed products in one place.</p>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.expiry}</td>
                <td className="actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
