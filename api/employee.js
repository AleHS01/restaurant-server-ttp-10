const router = require("express").Router();
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "restaurantdb",
  user: "alehs",
  password: "",
});

router.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM employee");
  console.log(rows);
  res.json(rows);
});

router.post("/", async (req, res) => {
  try {
    const { name, address, hire_date, position } = req.body;
    const { rows } = await pool.query(
      `INSERT INTO employee (name, address, hire_date, position) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, address, hire_date, position]
    );
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
