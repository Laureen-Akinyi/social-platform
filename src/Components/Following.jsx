// Followings.jsx
import React, { useState } from "react";
import { Navbar } from "./Navbar";
const Following = ({ user, allUsers }) => {
  const [followers, setFollowera] = useState(
    [
      { id: 1, name: "Jean Claude-vandame", followers: [2, 3] },
      { id: 2, name: "Teressa Mendozza", followers: [1] },
      { id: 3, name: "Bob-lee Swagger", followers: [1] },
    ]
  )

  return (
    <div >
      <Navbar />
      <div className='About'>
      <h2>Followers</h2>
      <ul>
        {followers?.map((follower) => (
          <li key={follower.id}>{follower.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};
export default Following;