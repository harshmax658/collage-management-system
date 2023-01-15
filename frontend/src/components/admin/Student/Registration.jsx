import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../Admin_style";

import SignUp from "../../signUp/SignUp";
import useLoginSignup from "../../../Custom Hooks/useLoginSignup";

const Registration = () => {
  const [select, setSelect] = useState(false);
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

      {/* {select && (
        <SignUp
          course={course}
          studentData={studentData}
          studentDataHandler={studentDataHandler}
          studentDob={studentDob}
          setStudentDob={setStudentDob}
          resetValues={resetValues}
        />
      )} */}
    </>
  );
};
export default Registration;
