import React from "react";
import { NavLink } from "react-router-dom";
import "./SettingsPage.css";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h2>Settings</h2>

      {/* Profile Settings */}
      <section className="settings-section">
        <h3>Profile Settings</h3>
        <NavLink to="/profile" className="settings-link">
          Manage Profile
        </NavLink>
      </section>

      {/* Account Management */}
      <section className="settings-section">
        <h3>Account Management</h3>
        <NavLink to="/logout" className="settings-link logout-link">
          Logout
        </NavLink>
      </section>
    </div>
  );
};

export default SettingsPage;
