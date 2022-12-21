const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const course = mongoose.model("Course", courseSchema);

module.exports = course;
