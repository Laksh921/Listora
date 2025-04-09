import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Tag, Clock } from "lucide-react";
import { supabase } from "../../supabaseClient";
import "./page.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [feedback, setFeedback] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");

  const fetchDashboardData = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) return;

    setUserId(user.id);
    setUserName(user.user_metadata?.full_name || user.email);

    const { data: products, error: productError } = await supabase
      .from("products")
      .select("*")
      .eq("user_id", user.id);

    if (!productError && products) {
      setTotalProducts(products.length);
      const uniqueCategories = Array.from(
        new Set(products.map((p) => p.category))
      );
      setCategories(uniqueCategories);
      const recent = [...products]
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, 3);
      setRecentProducts(recent);
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!feedback.trim()) {
      setFeedbackStatus("Please write something before submitting.");
      return;
    }

    const { error } = await supabase.from("feedbacks").insert([
      {
        user_id: userId,
        feedback: feedback.trim(),
      },
    ]);

    if (error) {
      setFeedbackStatus("Error submitting feedback.");
      console.error(error.message);
    } else {
      setFeedbackStatus("✅ Feedback submitted successfully!");
      setFeedback("");
    }

    setTimeout(() => setFeedbackStatus(""), 3000);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome back 👋</h1>
      <p className="dashboard-subheading">
        Here’s a quick snapshot of your inventory!
      </p>

      <div className="metrics-grid">
        <div className="card">
          <Package className="icon blue" />
          <div>
            <p className="label">Total Products</p>
            <p className="value">{totalProducts}</p>
          </div>
        </div>

        <div className="card">
          <Tag className="icon green" />
          <div>
            <p className="label">Categories</p>
            <p className="value">{categories.length}</p>
          </div>
        </div>
      </div>

      <div className="flex-buttons">
        <button className="manage-button" onClick={() => navigate("/products")}>
          📦 Manage Products
        </button>
        <button className="manage-button green" onClick={() => navigate("/add")}>
          ➕ Add Product
        </button>
      </div>

      <div className="summary-card">
        <div className="summary-header">
          <Clock className="icon gray" />
          <h2 className="summary-title">Recently Added Products</h2>
        </div>
        {recentProducts.length === 0 ? (
          <p className="summary-empty">No recent products found.</p>
        ) : (
          <div className="recent-products-grid">
            {recentProducts.map((product) => (
              <div key={product.id} className="product-card">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="product-image"
                  />
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
                <div className="product-details">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-meta">
                    {product.category} | ₹{product.price}
                  </p>
                  <p className="product-stock">{product.quantity} in stock</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginTop: "1rem" }}>
          <button className="manage-button" onClick={() => navigate("/products")}>
            View All Products
          </button>
        </div>
      </div>

      <div className="summary-card">
        <h3 className="summary-title">Got Feedback?</h3>
        <textarea
          className="feedback-box"
          placeholder="Suggest features or improvements..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          className="manage-button"
          style={{ marginTop: "1rem" }}
          onClick={handleFeedbackSubmit}
        >
          Submit Feedback
        </button>
        {feedbackStatus && <p className="feedback-status">{feedbackStatus}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
