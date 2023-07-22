import React, { useState } from "react";
import "../Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate=useNavigate()
    function handleLogout() {
      fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          // setUser(null)
          navigate("/")
        }
      });
    }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Blog Posts
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/paywall-posts">My Posts</NavLink>
        </li>
        <li>
          <NavLink to="/following">Followers</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};