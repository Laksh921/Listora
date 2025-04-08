import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./page.css";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditingProduct((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("products")
      .update(editingProduct)
      .eq("id", editingProduct.id);

    if (error) {
      alert("Failed to update product");
    } else {
      setEditingProduct(null);
      fetchProducts();
    }
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productToDelete.id);

    if (error) {
      alert("Error deleting product");
    } else {
      setProductToDelete(null);
      setShowDeleteConfirm(false);
      fetchProducts();
    }
  };

  return (
    <div className="products-container">
      <h1 className="products-heading">Product Inventory</h1>
      <p className="products-subheading">Manage all your listed products in one place.</p>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>₹{product.price}</td>
                  <td>{product.description}</td>
                  <td className="actions">
                    <button onClick={() => setEditingProduct(product)} className="edit-btn">Edit</button>
                    <button onClick={() => { setProductToDelete(product); setShowDeleteConfirm(true); }} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editingProduct && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Product</h3>
            <input name="name" value={editingProduct.name} onChange={handleEditChange} placeholder="Name" />
            <input name="category" value={editingProduct.category} onChange={handleEditChange} placeholder="Category" />
            <input name="quantity" value={editingProduct.quantity} onChange={handleEditChange} placeholder="Quantity" />
            <input name="price" value={editingProduct.price} onChange={handleEditChange} placeholder="Price" />
            <textarea name="description" value={editingProduct.description} onChange={handleEditChange} placeholder="Description" />
            <div className="modal-buttons">
              <button onClick={handleUpdate}>Update</button>
              <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this product?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete}>Yes, Delete</button>
              <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
