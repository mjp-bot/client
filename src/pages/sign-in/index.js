import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.account_type_id);

      if (res.data.user.account_type_id === 1) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/user-dashboard";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="left-content">
          <div className="top">
            <img
              src="/assets/brand/Delsan Logo with ISO.png"
              alt="Delsan Logo"
              className="logo"
            />
          </div>

          <div className="bottom">
            <div className="webTitle">
              <h2>Device Lifecycle</h2>
              <h2>Management System</h2>
              <p>Login to your account</p>
            </div>

            <form onSubmit={handleLogin}>
              <label>Username</label>
              <input
                type="text"
                placeholder="username@delsanonline.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {error && <p className="error">{error}</p>}

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="bg-pattern"></div>
      </div>
    </div>
  );
};

export default Login;
