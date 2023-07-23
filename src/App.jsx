import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import MyPosts from "./Components/MyPosts";
import Following from "./Components/Following";
import NotFound from "./Components/NotFound";
import Signup from './Components/Signup';
import About from "./Components/About";
import Contact from "./Components/Contact";
import PaywallPosts from './Components/PaywallPosts';
import PostPage from './Components/PostPage';
function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    followers: [2, 3],
  });
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" exact element={<Feed  posts={posts} error={error} setError={setError} setPosts={setPosts}/>} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/profile" element={<Profile  user={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/my-posts" element={<MyPosts />} />
        <Route path="/following" element={<Following />} />
        <Route path="/post/:id" element={<PostPage posts={posts} />}  />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/paywall-posts' element={<PaywallPosts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}
export default App