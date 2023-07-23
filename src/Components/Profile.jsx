// Profile.jsx
import React from "react";
import { Navbar } from "./Navbar";
const Profile = ({ user }) => {
  return (
    <div>
      <Navbar />
      <div className='About'>
      <h2>{user.name} Profile</h2>
      <h4>Username: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Followers: {user.followers}</h4>
      </div>
    </div>
  );
};
export default Profile;