const express = require("express");
const dbconnect = require("./config/database");
const routes = require("./routes/route");
dbconnect();

const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/api/v1/", routes);

app.listen(process.env.PORT, (err) => {
  console.log(`Server is running on ${process.env.PORT}`);
  if (err) {
    console.log("Error in connecting");
  }
});
