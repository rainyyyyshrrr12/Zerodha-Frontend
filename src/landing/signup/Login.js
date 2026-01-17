import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { API_BASE_URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_BASE_URL}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // save token
      localStorage.setItem("token", res.data.token);

      // redirect to DEPLOYED DASHBOARD
      window.location.href =
        "https://zerodha-dashboard-ob2t.onrender.com";
    } catch (err) {
      alert(err.response?.data?.msg || "Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to Zerodha</h2>

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
          <span onClick={() => navigate("/signup")}>
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
