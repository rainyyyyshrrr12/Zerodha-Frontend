import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "http://localhost:3001";
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to Zerodha</h2>
        <p className="subtitle">Access your trading dashboard</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          New user?{" "}
          <span onClick={() => (window.location.href = "/signup")}>
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
