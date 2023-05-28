const express = require("express");
const router = express.Router();

const {
  getCourses,
  updateCourse,
  getCourseSubject,
} = require("../../controller/Course_api");

router.get("/get-courses", getCourses);
router.post("/add-subejct-in-course/:id", updateCourse);
router.get("/get-subject-of-course/:id", getCourseSubject);

module.exports = router;
