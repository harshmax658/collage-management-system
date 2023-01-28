import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../Admin_style";

import SignUp from "../../signUp/SignUp";
import useLoginSignup from "../../../Custom Hooks/useLoginSignup";
import CourseOption from "./CourseOption";
import SpinLoader from "../../SpinLoader/SpinLoader";

const Registration = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true);
  const [semester, setSemester] = useState(true);
  const [studentDob, setStudentDob] = useState({
    date: 0,
    month: 0,
    year: 0,
  });
  const [studentData, studentDataHandler, resetValues] = useLoginSignup({
    name: "",
    email: "",
    motherName: "",
    fatherName: "",
    hightSchool: "",
    interMidiate: "",
    mobile: "",
    ug: "",
    role: "",
  });

  return (
    <>
      <GlobalStyle />
      <CourseOption
        course={course}
        setCourse={setCourse}
        setLoading={setLoading}
        setSemester={setSemester}
      />
      {!loading ? (
        <SignUp
          course={course}
          studentData={studentData}
          studentDataHandler={studentDataHandler}
          studentDob={studentDob}
          setStudentDob={setStudentDob}
          resetValues={resetValues}
          semester={semester}
        />
      ) : (
        <div className="center">
          <SpinLoader />
        </div>
      )}
    </>
  );
};
export default Registration;
