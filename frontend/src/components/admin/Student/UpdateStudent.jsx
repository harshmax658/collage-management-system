import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalStyle } from "../Admin_style";
import CourseOption from "./CourseOption";
import StudentList from "./StudentList";

const UpdateStudent = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true);

  const updateStudent = (data) => {
    // setStudents(students.filter((item) => data !== item.key));
  };
  // console.log(studentList, "studentList");

  return (
    <>
      <GlobalStyle />
      <CourseOption
        course={course}
        setCourse={setCourse}
        setLoading={setLoading}
        update={true}
      />
      <div className="student">{!loading && <StudentList />}</div>
    </>
  );
};

export default UpdateStudent;
