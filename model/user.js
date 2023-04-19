import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  title: String,
  description: String,
  start: String,
  end: String,
});

const user = mongoose.model("user", userSchema);
export default user;
