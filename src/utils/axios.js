// utils/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // yaha se sab prefix auto add hoga
  headers: {
    "Content-Type": "application/json",
  },
});

// agar har request mei token bhejna hai
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
