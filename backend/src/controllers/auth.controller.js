const {
  createUser,
  findUserByEmail,
  updateLastLogin,
} = require("../services/auth.service");

const { generateToken } = require("../utils/jwt");
const { comparePassword } = require("../utils/hash");

/* ===================== SIGNUP ===================== */
const signup = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    // Basic validation
    if (!email || !password || !fullName) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Password validation
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    // Check existing user
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    // Create user
    const user = await createUser({ email, password, fullName });

    // Generate JWT
    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    return res.status(201).json({
      token,
      user,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

/* ===================== LOGIN ===================== */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // 🔒 ACCOUNT STATUS CHECK (IMPORTANT)
    if (user.status !== "active") {
      return res.status(403).json({
        message: "Account is deactivated. Contact admin.",
      });
    }

    // Compare password
    const isMatch = await comparePassword(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Update last login timestamp
    await updateLastLogin(user.id);

    // Generate JWT
    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
        status: user.status,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  signup,
  login,
};
