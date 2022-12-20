import React from "react";
import SignUp from "../signUp/SignUp";
import { GlobalStyle } from "./Admin_style";

const AddFaculty = () => {
  return (
    <>
      <GlobalStyle />
      <SignUp addFaculty={true} />
    </>
  );
};

export default AddFaculty;
