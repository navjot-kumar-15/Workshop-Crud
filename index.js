const express = require("express");
const cors = require("cors");
const Connection = require("./db/db");
const Routes = require("./routes/route");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();

// Using the dataparser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Routes);
Connection();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT} `);
});
