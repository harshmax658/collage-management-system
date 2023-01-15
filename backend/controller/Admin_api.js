const Faculty = require("../Models/Faculty");
const Student = require("../Models/Student");

const createNewStudent = async (request, response) => {
  try {
    console.log(request.body);
    const student = await Student.findOne({ email: request.body.email });
    if (student) {
      return response.status(422).json({
        message: "student already exist",
      });
    }
    const newStudent = new Student({
      ...request.body,
      password: `CMS@${request.body.year}`,
    });
    console.log(newStudent);
    await newStudent.save();

    return response.status(200).json({
      message: "New student registerd",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal server error !! ",
    });
  }
};
const createNewFaculty = async (request, response) => {
  try {
    const faculty = await Faculty.findOne({ email: request.body.email });
    if (faculty) {
      return response.status(422).json({
        message: "student already exist",
      });
    }
    const newFaculty = new Faculty({
      ...request.body,
      password: `CMS@${request.body.year}`,
    });
    console.log(newFaculty);
    await newFaculty.save();

    return response.status(200).json({
      message: "New faculty registerd",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal server error !! ",
    });
  }
};
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

module.exports = { createNewStudent, createNewFaculty, addNewCourse };
