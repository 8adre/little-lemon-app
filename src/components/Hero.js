import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 id="hero-heading">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate("/reservations")}
            aria-label="Reserve a Table at Little Lemon"
          >
            Reserve a Table
          </button>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://unsplash.com"
            alt="Chef holding a slate platter of Mediterranean bruschetta appetizers"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
