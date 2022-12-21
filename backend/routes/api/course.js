const express = require("express");
const router = express.Router();

const { addNewCourse } = require("../../controller/Course_api");

router.post("/add-new-course", addNewCourse);

module.exports = router;
