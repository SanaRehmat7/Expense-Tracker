import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ×
      </button>
      <ul className="sidebar-links">
        <li>
          <NavLink to="/" onClick={toggleSidebar}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" onClick={toggleSidebar}>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" onClick={toggleSidebar}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
