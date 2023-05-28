const Course = require("../Models/Course");

const getCourses = async (request, response) => {
  try {
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
const updateCourse = async (request, response) => {
  try {
    // const id = request.pararms.id;
    console.log("____________________++++++++++++++++++++++==");
    console.log(request.body);
    const course = await Course.findOne({ name: request.params.id });
    course.subjects = [...course.subjects, ...request.body];
    await course.save();
    const course1 = await Course.findOne({ name: request.params.id });
    return response.status(200).json({
      message: "Course update",
      course1,
    });
  } catch (error) {
    console.log(error);

    return response.status(500).json({
      message: "Internal server error !!",
    });
  }
};
const getCourseSubject = async (request, response) => {
  try {
    const course = await Course.findOne({ name: request.params.id });
    return response.status(200).json({
      message: "Course update",
      data: course.subjects,
    });
  } catch (error) {
    console.log(error);

    return response.status(500).json({
      message: "Internal server error !!",
    });
  }
};

module.exports = { getCourses, updateCourse, getCourseSubject };
