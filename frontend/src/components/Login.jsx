import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const Navigate = useNavigate();
  const OnChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login.email, password: login.password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      Navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="container px-5 mt-5">
      <div className="form-floating mb-3">
        <input
        autoComplete="off"
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Enter email"
          name="email"
          value={login.email}
          onChange={OnChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
        autoComplete="off"
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={OnChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
