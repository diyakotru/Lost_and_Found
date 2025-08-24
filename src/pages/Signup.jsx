import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", { email, password });
      alert(res.data.msg || "Signup successful, please login!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="flex w-[900px] bg-themeCream rounded-3xl overflow-hidden shadow-md">
        {/* Left: Signup Form */}
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-center text-themeGreen mb-6">Sign Up</h1>
          <form className="space-y-5" onSubmit={handleSignup}>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
            <button type="submit" className="w-full bg-themeGreen text-themeCream font-semibold py-[10px] rounded-lg shadow-md">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-5">
            Already have an account?{" "}
            <a href="/login" className="text-themeGreen font-medium hover:underline">Login</a>
          </p>
        </div>
        {/* Right: Logo */}
        <div className="flex-1 flex items-center justify-center p-10">
          <img src="/logoWithname.png" alt="Logo" className="max-w-[250px] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
