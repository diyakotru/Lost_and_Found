import React, { useState } from "react";
import api from "../utils/axios";  // custom axios instance import karo

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // yaha axios ki jagah apna "api" use kar
      const res = await api.post("/auth/login", formData);

      if (res.data.success) {
        // Save token in localStorage
        localStorage.setItem("token", res.data.token);

        alert("Login successful!");
        window.location.href = "/dashboard"; // redirect
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="flex w-[900px] bg-themeCream rounded-3xl overflow-hidden shadow-md">
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-center text-themeGreen mb-6">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-themeGreen text-themeCream font-semibold py-[10px] rounded-lg shadow-md"
            >
              Login
            </button>
          </form>
        </div>

        <div className="flex-1 flex items-center justify-center p-10">
          <img src="/logoWithname.png" alt="Logo" className="max-w-[250px]" />
        </div>
      </div>
    </div>
  );
}

export default Login;
