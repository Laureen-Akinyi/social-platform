import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import SearchBar from "./Search";
const PaywallPosts = ({ isAuthenticated }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch the first 10 posts (page 1)
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_page=1"
        );
        // Fetch the next 9 pages (pages 2 to 10) in parallel
        const promises = Array.from({ length: 9 }, (_, index) =>
          axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${index + 2}`)
        );
        // Wait for all promises to resolve and combine the results
        const nextPageResponses = await Promise.all(promises);
        const nextPagePosts = nextPageResponses.flatMap((res) => res.data);
        // Combine all posts (first page + next 9 pages) to get 100 posts
        setPosts([...response.data, ...nextPagePosts]);
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
        <Navbar />
        <SearchBar 
            search={search}
            setSearch={setSearch}
        />
      <ul>
        {posts.map((post) => (
          <li className="item" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {!isAuthenticated && posts.length > 20 && <div>Paywall</div>}
    </div>
  );
};
export default PaywallPosts;





