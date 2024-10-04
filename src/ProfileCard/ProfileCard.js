// src/components/ProfileCard/ProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ProfileCard.css';

function ProfileCard({ userName, email }) {
  return (
    <div className="profile-card">
      {/* <h2>Your Profile</h2> */}
      <Link to="/profile" className="profile-link">Your Profile</Link> {/* Link to the profile page */}
      <br></br>
      <Link to="/reports" className="profile-link">My Reports</Link> {/* Link to the profile page */}
    </div>
  );
}

export default ProfileCard;