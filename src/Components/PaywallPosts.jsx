import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { Navbar } from "./Navbar";
// import SearchBar from "./Search";

const PaywallPosts = ({ isAuthenticated }) => {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_page=1"
        );
        const promises = Array.from({ length: 9 }, (_, index) =>
          axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${index + 2}`)
        );
        const nextPageResponses = await Promise.all(promises);
        const nextPagePosts = nextPageResponses.flatMap((res) => res.data);
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
        {/* <SearchBar 
            search={search}
            setSearch={setSearch}
        /> */}
      <ul>
        {posts.map((post) => (
          <li className="item" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3 style={{color: "black"}}>
                {(post.title).length <=10
                    ? post.title
                    : `${(post.title).slice(0,10)}...`
                }
              </h3>
            </Link>
            <p className="postBody">{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
            }</p>
          </li>
        ))}
      </ul>
      {!isAuthenticated && posts.length > 20 && <div>Paywall</div>}
    </div>
  );
};
export default PaywallPosts;





