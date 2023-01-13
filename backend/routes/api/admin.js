const express = require("express");
const router = express.Router();
const {
  createNewStudent,
  createNewFaculty,
} = require("../../controller/Admin_api");

router.post("/register-new-student", createNewStudent);
router.post("/register-new-faculty", createNewFaculty);

module.exports = router;
