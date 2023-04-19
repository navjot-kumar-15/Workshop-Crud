const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Connection = async (req, res) => {
  const URL = process.env.URL;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log("Error while connecting the data", error.message);
  }
};

module.exports = Connection;
