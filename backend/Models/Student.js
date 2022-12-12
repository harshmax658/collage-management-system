const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const student = mongoose.model("Student", studentSchema);

module.exports = student;
