const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user"); // User schema ko imported

const app = express();
app.use(express.json()); // JSON body parse 

// ================== MongoDB Connection ==================
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB Error:", err));

// ================== Routes ==================

// Register Route
app.post("/register", async (req, res) => {
  try {
    const { collegeId, password } = req.body;

    // Empty field check
    if (!collegeId || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ collegeId });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({ collegeId, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ================== Start Server ==================
app.listen(5000, () => {
  console.log(" Server running on http://localhost:5000");
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // College domain check
  if (!email.endsWith("@igdtuw.ac.in")) {
    return res.status(400).json({ message: "Use your IGDTUW college email ID" });
  }

  // Dummy password check (later DB add)
  if (password === "12345") {
    return res.json({ message: "Login successful", redirect: "/home" });
  } else {
    return res.status(401).json({ message: "Invalid password" });
  }
});
