// Feed.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { OpenNav } from "./OpenNav";
const Feed = ({ isAuthenticated }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        setError("Error fetching posts.");
      }
    };
    fetchPosts();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <OpenNav />
      <h2>Feed</h2>
      <ul>
        {posts.slice(0, isAuthenticated ? 100 : 20).map((post) => (
          <li className="item" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {!isAuthenticated && posts.length > 20 && <div><Link to="/paywall-posts">View More Blog Posts</Link></div>}
    </div>
  );
};
export default Feed;