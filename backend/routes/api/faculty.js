const express = require("express");
const router = express.Router();
const { facultyLogin, getFaculties } = require("../../controller/faculty_api");

router.post("/student-login", facultyLogin);
router.get("/get-faculty-list", getFaculties);

module.exports = router;
