import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Connection = async (req, res) => {
  const DATABASE_URL = process.env.DATABASE_URL;
  try {
    await mongoose.connect(DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log("Error while connecting the data", error.message);
  }
};
