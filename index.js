import express from "express";
import cors from "cors";
import { Connection } from "./db/db.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Using the dataparser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Routes);
Connection();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT} `);
});
