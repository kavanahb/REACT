import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) return toast.error("No user found! Please register.");

    if (loginData.email !== storedUser.email)
      return toast.error("Incorrect email!");

    if (loginData.password !== storedUser.password)
      return toast.error("Incorrect password!");

    toast.success("Login successful!");

    setTimeout(() => navigate("/home"), 1200);
  };

  return (
    <div style={{ width: "350px", margin: "auto", padding: "30px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email"
          onChange={handleChange} /><br /><br />

        <input type="password" name="password" placeholder="Password"
          onChange={handleChange} /><br /><br />

        <button type="submit">Login</button>
      </form>

      <br />

      
    

      <ToastContainer />
    </div> 
  );
};

export default Login;
