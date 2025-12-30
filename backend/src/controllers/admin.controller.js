const pool = require("../config/db");

/**
 * GET /admin/users
 */
const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const usersResult = await pool.query(
      `SELECT id, email, full_name, role, status, created_at
       FROM users
       ORDER BY created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    const countResult = await pool.query(
      `SELECT COUNT(*) FROM users`
    );

    return res.status(200).json({
      users: usersResult.rows,
      total: parseInt(countResult.rows[0].count),
      page,
      limit,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * PATCH /admin/users/:id/activate
 */
const activateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      `UPDATE users SET status = 'active' WHERE id = $1`,
      [id]
    );

    return res.status(200).json({
      message: "User activated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * PATCH /admin/users/:id/deactivate
 */
const deactivateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      `UPDATE users SET status = 'inactive' WHERE id = $1`,
      [id]
    );

    return res.status(200).json({
      message: "User deactivated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllUsers,
  activateUser,
  deactivateUser,
};
