import React, { useState } from "react";
import "./page.css";

const AddProduct = () => {
    const [product, setProduct] = useState<{
        name: string;
        category: string;
        quantity: string;
        price: string;
        description: string;
        image: File | null;
      }>({
        name: "",
        category: "",
        quantity: "",
        price: "",
        description: "",
        image: null,
      });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProduct((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product to submit:", product);
    // Integrate your backend API call here
  };

  return (
    <div className="add-product-container">
      <h2 className="form-title">Add New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" required onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" required onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" required onChange={handleChange} />
        <input type="number" name="price" placeholder="Price (₹)" required onChange={handleChange} />
        <textarea name="description" placeholder="Description" rows={4} onChange={handleChange}></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
