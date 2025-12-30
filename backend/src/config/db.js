const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  if (process.env.NODE_ENV !== "test") {
    console.log("✅ PostgreSQL connected");
  }
});

pool.on("error", (err) => {
  console.error("❌ Unexpected PostgreSQL error", err);
  process.exit(1);
});

module.exports = pool;
