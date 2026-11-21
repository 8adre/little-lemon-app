import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo" aria-label="Little Lemon Home">
          <span className="logo-icon" aria-hidden="true">🍋</span>
          <span className="logo-text">LITTLE LEMON</span>
        </Link>

        <button
          className="mobile-menu-btn"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Main Navigation"
        >
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
            <li><Link to="/reservations" onClick={() => setMenuOpen(false)}>Reservations</Link></li>
            <li><Link to="/order-online" onClick={() => setMenuOpen(false)}>Order Online</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
