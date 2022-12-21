const Course = require("../Models/Course");

const addNewCourse = async (request, response) => {
  try {
    const course = new Course({ ...request.body });
    await course.save();
    return response.status(200).json({
      message: "Course added Succesfully",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal server error !!",
    });
  }
};

module.exports = { addNewCourse };
