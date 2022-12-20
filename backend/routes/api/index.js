const express = require("express");
const router = express.Router();

const admin = require("./admin");
const student = require("./student");

router.use("/admin", admin);
router.use("/student", student);

module.exports = router;
