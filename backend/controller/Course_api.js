const Course = require("../Models/Course");

const getCourses = async (request, response) => {
  try {
    console.log("first");
    const course = await Course.find();
    console.log(course);
    return response.status(200).json({
      message: "Course Found",
      courses: course,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal server error !!",
    });
  }
};

module.exports = { getCourses };
