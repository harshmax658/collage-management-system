const express = require("express");
const router = express.Router();
const {
  studentLogin,
  getStudent,
  deleteStudent,
} = require("../../controller/Student_api");

router.post("/student-login", studentLogin);
router.get("/get-student/:course", getStudent);
router.delete("/delete-student/:id", deleteStudent);

module.exports = router;
