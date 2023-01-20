const express = require("express");
const router = express.Router();
const { studentLogin, getStudent } = require("../../controller/Student_api");

router.post("/student-login", studentLogin);
router.get("/get-student/:course", getStudent);

module.exports = router;
