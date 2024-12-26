import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Logo and Tagline */}
        <div className="footer__section footer__logo">
          <h3>Expense Tracker</h3>
          <p>Track your expenses and take control of your finances.</p>
        </div>

        {/* Quick Links */}
        <div className="footer__section footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer__section footer__social">
          <h4>Follow Us</h4>
          <div className="footer__social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
