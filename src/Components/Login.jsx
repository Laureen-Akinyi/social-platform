import {  useState, useEffect} from 'react';
import {  Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    function handleSubmit(e){
        e.preventDefault();
        fetch("https://social-platform-pozp.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
      
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              if (user.body) {
                // onLogin(user)
                localStorage.setItem('user', JSON.stringify(user))
                navigate("/paywall-posts")
              }
              else {
                console.log({
                  user_name,
                  email,
                  password
                })
                r.json().then((err) => setErrMsg(err.errors))
              }
          })}
        });
          
      }


    return (
        <>
                <section>
                    <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Email:</label>
                        <input
                            type="email"
                            id="user_name"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <Link to="/register">Sign Up</Link>
                        </span>
                    </p>
                </section>
        </>
    )
}
export default Login