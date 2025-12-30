const pool = require("../config/db");
const { hashPassword, comparePassword } = require("../utils/hash");

/* CREATE USER (already working) */
const createUser = async ({ email, password, fullName }) => {
  const hashedPassword = await hashPassword(password);

  const query = `
    INSERT INTO users (email, password_hash, full_name)
    VALUES ($1, $2, $3)
    RETURNING id, email, full_name, role, status, created_at
  `;

  const values = [email, hashedPassword, fullName];
  const result = await pool.query(query, values);

  return result.rows[0];
};

/* FIND USER BY EMAIL */
const findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
};

/* UPDATE LAST LOGIN */
const updateLastLogin = async (userId) => {
  await pool.query(
    "UPDATE users SET last_login = NOW() WHERE id = $1",
    [userId]
  );
};

module.exports = {
  createUser,
  findUserByEmail,
  updateLastLogin,
};
