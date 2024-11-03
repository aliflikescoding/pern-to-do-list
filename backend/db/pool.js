import pg from "pg";
const { Pool } = pg;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pool = new Pool({
  host: "localhost",
  user: `${user}`,
  database: "perntodo",
  password: `${password}`,
  port: 5432,
});

export default pool;
