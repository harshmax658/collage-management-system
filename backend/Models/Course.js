const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subjects: {
      type: Array,
    },
    semester: {
      type: String,
      required: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },

  {
    timestamps: true,
  }
);
const course = mongoose.model("Course", courseSchema);

module.exports = course;
