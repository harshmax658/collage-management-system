const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
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
    hightSchool: {
      type: String,
      required: true,
    },
    interMidiate: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    ug: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const student = mongoose.model("Student", studentSchema);

module.exports = student;
