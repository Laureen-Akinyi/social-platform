import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate=useNavigate();

    const userRef = useRef();
    const errRef = useRef();
    const [user_name, setUser_name] = useState('');
    const [validName, setValidName] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
            fetch("https://social-platform-pozp.onrender.com/register",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  user_name: user_name,
                  email: email,
                  password: password
                }),
              }
            ).then((r) => {
                if (r.ok) {
                  r.json().then((user) => {
                    console.log(JSON.stringify(r))
                    setSuccess(true);
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate("/login")
                  })
                } else {
                  console.log({
                    user_name,
                    email,
                    password
                  })
                  r.json().then((err) => setErrMsg(err.errors))
                }
              })
    }
    return (
        <>
            {success ? (
                <section>
                    <h1>Sign up Success!</h1>
                    <p>
                    <Link to="/login">Sign In</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="user_name">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="user_name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser_name(e.target.value)}
                            value={user_name}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                        />
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-describedby="email"
                        />
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-describedby="passwordnote"
                        />
                        <button>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            <Link to="/login">Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}
export default Signup