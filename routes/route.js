import express from "express";
const router = express.Router();
import {
  addData,
  singleData,
  editData,
  deleteData,
  getData,
} from "../controllers/controllers.js";

router.post("/add", addData);
router.get("/all", getData);
router.get("/:id", singleData);
router.put("/:id", editData);
router.delete("/:id", deleteData);

export default router;
