import React, { useState } from "react";
import SignUp from "../signUp/SignUp";
import { GlobalStyle } from "./Admin_style";

import useLoginSignup from "../../Custom Hooks/useLoginSignup";

const AddFaculty = () => {
  const [dob, setDob] = useState({
    date: 0,
    month: 0,
    year: 0,
  });
  const [facultyData, facultyDataHandler, resetValues] = useLoginSignup({
    name: "",
    email: "",
    motherName: "",
    fatherName: "",
    mobile: "",
    role: "faculty",
  });
  return (
    <>
      <GlobalStyle />
      <SignUp
        addFaculty={true}
        facultyData={facultyData}
        facultyDataHandler={facultyDataHandler}
        dob={dob}
        setDob={setDob}
        resetValues={resetValues}
      />
    </>
  );
};

export default AddFaculty;
