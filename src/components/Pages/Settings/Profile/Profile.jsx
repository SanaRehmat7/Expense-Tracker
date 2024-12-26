import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="profile-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </label>
        {isEditing ? (
          <button onClick={handleSave} className="btn-save">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn-edit">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;

