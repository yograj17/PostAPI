const express = require("express");
const DB = require("./config/DBConnection");

const router = require("./router/router");
const app = express();

app.use(express.json());
app.use(router);

app.listen("3000", () => {
  console.log("Server Listen at 3000");
});
DB();
