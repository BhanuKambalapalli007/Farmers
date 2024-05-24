//import { useState } from 'react'
//import { useLogin } from '../../hooks/useLogin'

// styles
import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'


  const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
  
    const onEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const onPasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    useEffect(() => {
      const token = Cookie.get("jwt_token");
      if (token !== undefined) {
        setLoggedIn(true);
      }
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3003/login",
          { email, password },
        );
        console.log("JWT token:", response.data.token);
        document.cookie = `jwt_token=${response.data.token}; path=/`;
        document.cookie = `username=${response.data.user.name}; path=/`;
        setLoggedIn(true);
      } catch (error) {
        console.error("Login error:", error.response.data.message);
        setError(error.response.data.message);
      }
    };
  
    const goToRegister = () => {
      navigate("/signup");
    };
  
    if (loggedIn) {
      navigate("/home");
    }

  
  return (
    <div className="body1">
    <div className="main">
    <div className="container2">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onPasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p className="error">{error}</p>
          <p>Don't have an account:</p>
          <button type="button" onClick={goToRegister} >
            Register
          </button>
          {/* Changed button type to "button" */}
        </form>
      </div>
    </div>
    </div>
  )
}

export default LoginForm;
