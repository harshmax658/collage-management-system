const Faculty = require("../Models/Faculty");
const facultyLogin = async (request, response) => {
  try {
    const { emailOrMobile, password } = request.body;
    console.log(request.body);
    const student = await Faculty.findOne({
      $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    });
    if (student) {
      // console.log(student);
      console.log(password);
      console.log(student.password);
      if (password === student.password) {
        console.log(password === student["password"]);
        return response.status(200).json({
          message: "user found !!",
          data: student,
        });
      }
      return response.status(401).json({
        message: "wrong password",
      });
    }
    return response.status(404).json({
      message: "user not found ",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal server error !!",
    });
  }
};
const getFaculties = async (request, response) => {
  try {
    const data = await Faculty.find({});
    return response.status(200).json({
      message: "Faculty List",
      data: data,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal server error !!",
    });
  }
};
module.exports = { facultyLogin, getFaculties };
