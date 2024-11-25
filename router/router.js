const express = require("express");
const router = express.Router();

const ResiterController = require("../controller/resiterController");
const data = [
  {
    name: "one",
    num: "1",
  },
  {
    name: "two",
    num: "2",
  },
  {
    name: "three",
    num: "3",
  },
  {
    name: "four",
    num: "4",
  },
];

router.get("/api/data", (req, res) => {
  res.status(200).json({
    success: true,
    data: data,
  });
});

router.post("/api/regiter", ResiterController);

module.exports = router;
