import React, { useEffect, useState } from "react";
// import SignUp from "../signUp/SignUp";
import { GlobalStyle } from "../Admin_style";

import useLoginSignup from "../../../Custom Hooks/useLoginSignup";
import FacultyList from "./FacultyList";
import { useDispatch } from "react-redux";
import { SetFacultyList } from "../../../redux/admin/action";

const UpdateFaculty = () => {
  const dispatch = useDispatch();
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
  const getFacultyList = async () => {
    const data = await fetch("/api/faculty/get-faculty-list");
    if (data.status === 200) {
      const jsondata = await data.json();
      console.log(jsondata);
      dispatch(SetFacultyList(jsondata));
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    getFacultyList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <FacultyList />
      {/* <SignUp
        addFaculty={true}
        facultyData={facultyData}
        facultyDataHandler={facultyDataHandler}
        dob={dob}
        setDob={setDob}
        resetValues={resetValues}
      /> */}
    </>
  );
};

export default UpdateFaculty;
