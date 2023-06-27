const router = require("express").Router();
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "restaurantdb",
  user: "postgres",
  password: "Alejandroh01",
});

router.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM menu");
  console.log(rows);
  res.json(rows);
});

router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO menu (name, description, price) VALUES ($1, $2, $3) RETURNING *",
      [name, description, price]
    );
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
