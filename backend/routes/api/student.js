const express = require("express");
const router = express.Router();
const { studentLogin } = require("../../controller/Student_api");

router.post("/student-login", studentLogin);

module.exports = router;
