import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import { API_BASE_URL } from "../../config";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_BASE_URL}/signup`,
        {
          name,
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
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create your Zerodha account</h2>
        <p className="subtitle">
          Start investing in stocks & mutual funds
        </p>

        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button type="submit">Sign up</button>
        </form>

        <p className="login-link">
          Already registered?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
