import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://e-commerce-clone-square-boat-7468.vercel.app/login/", formData)
      .then((response) => {
        if (response.status === 200) {
          setError(false);
          window.location.href = "/home";
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="login-error">Invalid email or password</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;
