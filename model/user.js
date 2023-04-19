const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  title: String,
  description: String,
  start: String,
  end: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
