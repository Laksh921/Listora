import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import "./page.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<{
    name: string;
    category: string;
    quantity: string;
    price: string;
    rating: string;
    description: string;
    image: File | null;
  }>({
    name: "",
    category: "",
    quantity: "",
    price: "",
    rating: "",
    description: "",
    image: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProduct((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let imageUrl = "";
      if (product.image) {
        const fileExt = product.image.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("product-images")
          .upload(fileName, product.image);

        if (imageError) throw imageError;

        const { data: publicUrlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) throw new Error("User not authenticated");

      const { error: insertError } = await supabase.from("products").insert([
        {
          name: product.name,
          category: product.category,
          quantity: parseInt(product.quantity),
          price: parseFloat(product.price),
          rating: parseFloat(product.rating),
          description: product.description,
          image_url: imageUrl,
          user_id: user.id,
        },
      ]);

      if (insertError) throw insertError;

      alert("Product added successfully!");
      navigate("/products");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="form-title">Add New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1 to 5)"
          min="1"
          max="5"
          step="0.1"
          required
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          onChange={handleChange}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
