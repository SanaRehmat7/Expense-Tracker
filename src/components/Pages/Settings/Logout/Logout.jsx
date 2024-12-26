import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add actual logout logic here
    alert("You have logged out successfully!");
    navigate("/");
  };

  return (
    <div className="logout-page">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout} className="btn-logout">
        Yes, Logout
      </button>
    </div>
  );
};

export default Logout;

