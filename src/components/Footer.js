import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-text">🍋 LITTLE LEMON</span>
          <p>Traditional Mediterranean recipes served with a modern twist.</p>
        </div>

        <nav aria-label="Footer Navigation">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <div>
          <h4>Contact</h4>
          <address>
            123 Mediterranean Ave, Chicago, IL<br />
            <a href="tel:+13125550000">(312) 555-0000</a><br />
            <a href="mailto:hello@://littlelemon.com">hello@://littlelemon.com "just a random email"</a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
