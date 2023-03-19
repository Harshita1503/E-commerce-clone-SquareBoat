import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://e-commerce-clone-square-boat-7468.vercel.app/register/", formData)
      .then((response) => {
        console.log(response.data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="tel"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleInputChange}
            className="input"
          />
          <button type="submit" className="button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
