const pool = require("../config/db");
const { hashPassword, comparePassword } = require("../utils/hash");

/**
 * GET /users/me
 */
const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      `SELECT id, email, full_name, role, status, created_at, last_login
       FROM users
       WHERE id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * PUT /users/me
 */
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { fullName, email } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const result = await pool.query(
      `UPDATE users
       SET full_name = $1, email = $2, updated_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING id, email, full_name, role`,
      [fullName, email, userId]
    );

    return res.status(200).json({
      message: "Profile updated successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * PUT /users/me/password
 */
const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (newPassword.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const userResult = await pool.query(
      `SELECT password_hash FROM users WHERE id = $1`,
      [userId]
    );

    const user = userResult.rows[0];

    const isMatch = await comparePassword(
      currentPassword,
      user.password_hash
    );

    if (!isMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    const hashedNewPassword = await hashPassword(newPassword);

    await pool.query(
      `UPDATE users
       SET password_hash = $1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $2`,
      [hashedNewPassword, userId]
    );

    return res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getCurrentUser,
  updateProfile,
  changePassword,
};
