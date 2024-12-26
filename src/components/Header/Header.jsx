import React, { useState, useEffect } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.className = savedMode ? "dark-mode" : "light-mode";
  }, []);

  // Toggle dark mode
  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-mode" : "light-mode";
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src="/images/logo.png" alt="App Logo" className="header__logo-img" />
        <h2>Expense Tracker</h2>
      </div>
      {/* Navigation links - Only shown on desktop */}
      <nav className="header__nav desktop-only">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Icons */}
      <div className="header__icons">
        <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
        {/* Menu icon - Shown only on responsive mode */}
        <button className="header__menu-btn mobile-only" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
