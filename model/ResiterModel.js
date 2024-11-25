const mongoose = require("mongoose");

const resiterschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  setpassword: {
    type: String,
    required: true,
  },
});

const ResiterSchema = mongoose.model("resiter", resiterschema);
module.exports = ResiterSchema;
