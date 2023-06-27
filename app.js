const express = require("express");
const app = express();
const { Pool } = require("pg");
const PORT = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", require("./api"));

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "restaurantdb",
  user: "alehs",
  password: "",
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = pool;
