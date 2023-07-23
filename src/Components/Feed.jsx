// Feed.jsx
import { Link } from "react-router-dom"
import { OpenNav } from "./OpenNav";

const Feed = ({ isAuthenticated, posts, error, setError, setPosts }) => {
  
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <OpenNav />
      <h2 style={{color: "white"}}>Feed</h2>
      <ul>
        {posts.slice(0, isAuthenticated ? 100 : 20).map((post) => (
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
      {!isAuthenticated && posts.length > 20 && <div><Link to="/register">View More Blog Posts</Link></div>}
    </div>
  );
};
export default Feed;