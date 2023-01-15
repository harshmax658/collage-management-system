const express = require("express");
const router = express.Router();

const { getCourses } = require("../../controller/Course_api");

router.get("/get-courses", getCourses);

module.exports = router;
