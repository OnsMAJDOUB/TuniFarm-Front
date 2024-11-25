import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/login", { email, password });
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
