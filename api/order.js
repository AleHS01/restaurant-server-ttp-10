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
  const { rows } = await pool.query("SELECT * FROM order_tb");
  console.log(rows);
  res.json(rows);
});

router.post("/", async (req, res) => {
  try {
    const { order_date, totalAmount, customerid, employee_id, itemid } =
      req.body;
    const { rows } = await pool.query(
      "INSERT INTO order_tb (order_date, totalAmount, customerid, employee_id, itemid) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [order_date, totalAmount, customerid, employee_id, itemid]
    );
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
