const express = require("express");
const router = express.Router();

const ResiterController = require("../controller/resiterController");

router.post("/api/regiter", ResiterController);

module.exports = router;
