import { useState } from 'react';
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
function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
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
        <Route path="/" exact element={<Feed  />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/profile" element={<Profile  user={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/my-posts" element={<MyPosts />} />
        <Route path="/following" element={<Following />} />
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