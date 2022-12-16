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
    const newStudent = new Student({ ...request.body });
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

module.exports = { createNewStudent };
