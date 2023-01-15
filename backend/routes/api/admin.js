const express = require("express");
const router = express.Router();
const {
  createNewStudent,
  createNewFaculty,
  addNewCourse,
} = require("../../controller/Admin_api");

router.post("/register-new-student", createNewStudent);

router.post("/register-new-faculty", createNewFaculty);

router.post("/add-new-course", addNewCourse);

module.exports = router;
