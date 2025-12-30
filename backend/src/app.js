require("dotenv").config({
  quiet: process.env.NODE_ENV === "test",
});

const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Avoid noisy logs during tests
if (process.env.NODE_ENV !== "test") {
  console.log("✅ app.js loaded");
}

// ✅ MUST be before routes
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend running successfully",
  });
});

module.exports = app;
