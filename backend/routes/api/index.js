const express = require("express");
const router = express.Router();

const admin = require("./admin");
const student = require("./student");
const course = require("./course");

router.use("/admin", admin);
router.use("/student", student);
router.use("/course", course);

module.exports = router;
