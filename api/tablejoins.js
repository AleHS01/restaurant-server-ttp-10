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
  const { rows } = await pool.query(
    "SELECT * FROM menu INNER JOIN order_tb ON menu.itemid = order_tb.itemid"
  );
  console.log(rows);
  res.json(rows);
});

//join two tables
router.get("/two", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT * FROM menu INNER JOIN order_tb ON menu.itemid = order_tb.itemid"
  );
  console.log(rows);
  res.json(rows);
});

//join three tables
router.get("/three", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT * FROM menu INNER JOIN order_tb ON menu.itemid = order_tb.MenuID INNER JOIN customer ON order_tb.customerid = customer.customerid"
  );
  console.log(rows);
  res.json(rows);
});

//join all four tables in database
router.get("/four", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT * FROM menu INNER JOIN order_tb ON menu.itemid = order_tb.itemid INNER JOIN employee ON order_tb.employee_id = employee.employee_id INNER JOIN customer ON order_tb.customerid = customer.customerid"
  );
  console.log(rows);
  res.json(rows);
});

module.exports = router;
