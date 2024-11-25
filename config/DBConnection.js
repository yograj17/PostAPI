const mongoose = require("mongoose");

const DBconnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/PostUploading")
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => {
      console.log("Error Found While DB connection");
    });
};

module.exports = DBconnection;
