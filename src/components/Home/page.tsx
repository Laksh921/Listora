import React, { useEffect, useState } from "react";
import { Package, Tag, Clock } from "lucide-react";
import { supabase } from "../../supabaseClient";
import "./page.css";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [recentProducts, setRecentProducts] = useState<any[]>([]);

  const fetchDashboardData = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) return;

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

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">
        Welcome back, <span className="text-blue">{userName?.split(" ")[0]}</span> 👋
      </h1>
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
        <button className="manage-button">📦 Manage Products</button>
        <button className="manage-button green">➕ Add Product</button>
        <button className="manage-button yellow">🗂️ Add Category</button>
      </div>

      <div className="summary-card">
        <div className="summary-header">
          <Clock className="icon gray" />
          <h2 className="summary-title">Recently Added Products</h2>
        </div>
        {recentProducts.length === 0 ? (
          <p className="summary-empty">No recent products found.</p>
        ) : (
          <ul className="summary-list">
            {recentProducts.map((product) => (
              <li key={product.id}>
                <div className="flex-space-between">
                  <span className="text-bold">{product.name}</span>
                  <span className="text-muted">{product.quantity} in stock</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="summary-card">
        <h3 className="summary-title">Got Feedback?</h3>
        <textarea
          className="feedback-box"
          placeholder="Suggest features or improvements..."
        />
        <button className="manage-button" style={{ marginTop: "1rem" }}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
