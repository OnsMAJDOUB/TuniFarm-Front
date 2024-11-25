import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
