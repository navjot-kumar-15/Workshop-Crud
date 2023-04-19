const express = require("express");
const router = express.Router();
const {
  addData,
  singleData,
  editData,
  deleteData,
  getData,
} = require("../controllers/controllers");

router.post("/add", addData);
router.get("/all", getData);
router.get("/:id", singleData);
router.put("/:id", editData);
router.delete("/:id", deleteData);

module.exports = router;
