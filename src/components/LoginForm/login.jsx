import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      navigate("/"); // Redirect to admin page
    } else if (username === "treasurer" && password === "123") {
      navigate("/thome"); // Redirect to treasurer page
    } else {
      alert("Invalid username or password."); // Inform user about incorrect credentials
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section (Logo and Text) */}
      <div className="md:w-1/2 bg-zinc-800 flex items-center justify-center p-8">
      <div className="text-center text-white mx-auto"> 
          <img src={logo} className="lg:w-80 my-4 mx-52" alt="Logo" />
          <h1 className=" mb-2 -ml-4 text-3xl text-white font-bold">BSIT Disbursement System</h1>
          <p className="text-xl">
            Pioneering Efficiency in IT Department Funding Management.
          </p>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="md:w-1/2 h-full bg-white flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full flex flex-col border-4 mt-10 border-zinc-800 rounded-md p-20">
          <h1 className="text-3xl font-semibold mb-4">Login</h1>
          <p className="text-base mb-4">
            Welcome! Please enter your details to login.
          </p>

          <div className="mb-4">
            <input
              type="username"
              placeholder="Username"
              className="w-full py-3 px-4 bg-transparent border-b border-black outline-none focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 px-4 bg-transparent border-b border-black outline-none focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            className="w-full bg-zinc-800 text-white py-3 rounded-md transition duration-300 ease-in-out hover:bg-green-700 font-bold"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
