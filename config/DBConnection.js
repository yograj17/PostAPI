const mongoose = require("mongoose");

const DBconnection = () => {
  mongoose
    .connect(
      "mongodb+srv://yograjpatil777:32Or0JYgEytWrCBs@yograj.qlguo.mongodb.net/PostUploading"
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => {
      console.log("Error Found While DB connection");
    });
};

module.exports = DBconnection;
