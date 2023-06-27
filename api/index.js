const router = require("express").Router();

router.use("/employee", require("./employee"));
router.use("/customer", require("./customer"));
router.use("/menu", require("./menu"));
router.use("/order", require("./order"));
router.use("/tablejoins", require("./tablejoins"));

module.exports = router;
