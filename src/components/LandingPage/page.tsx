import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Needed for navigation
import "./page.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="landing-navbar">
        <div className="navbar-left">
          <h2 className="logo">Listora</h2>
        </div>
        <div className="navbar-right">
          <button className="nav-btn">Login</button>
          <button className="nav-btn signup">Signup</button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="hero-content">
        <h1>
          <span className="highlight">Product Management</span> made simple.
        </h1>
        <p>
          Organize, track, and manage your product data with ease using Listora.
        </p>
        <button className="browse-button" onClick={() => navigate("/home")}>
          Get Started
        </button>
        <p className="creator">Created by : Lakshya Bansal</p>
      </header>

      {/* Features Section */}
      <section className="illustration-section">
        <div className="info-box">
          <h2>Easily manage all your products in one place</h2>
          <p>
            Listora helps you create, update, filter, and search products
            efficiently. Ideal for e-commerce, inventory, or admin dashboards.
          </p>
          <div className="features">
            <div className="feature">
              <h3>Secure Access</h3>
              <p>
                Only authorized users can view and modify product data using JWT
                authentication.
              </p>
            </div>
            <div className="feature">
              <h3>Smart Filters</h3>
              <p>
                Find products easily with category, price, and rating filters or
                text search.
              </p>
            </div>
            <div className="feature">
              <h3>Real-time Actions</h3>
              <p>
                Instantly update your inventory with smooth create, edit, and
                delete flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefit-box">
          <h4>Fast and Lightweight</h4>
          <p>Built with performance in mind using React and TypeScript.</p>
        </div>
        <div className="benefit-box">
          <h4>Clean Interface</h4>
          <p>A minimal design for maximum productivity.</p>
        </div>
        <div className="benefit-box">
          <h4>Customizable</h4>
          <p>
            Easily integrate into your existing systems or modify to fit your
            needs.
          </p>
        </div>
        <div className="benefit-box">
          <h4>Open for Expansion</h4>
          <p>
            Add new features like analytics, exporting, or AI assistants anytime.
          </p>
        </div>
      </section>

      <button className="browse-button">Browse Now</button>

      <footer className="footer">
        <p>© 2025 Listora. All rights reserved.</p>
        <p>Made with ❤️</p>
      </footer>
    </div>
  );
};

export default LandingPage;
