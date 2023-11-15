const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db connected Succesfully");
    })
    .catch((err) => {
      console.err(err);
    });
};

module.exports = dbconnect;
