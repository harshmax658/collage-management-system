import React from "react";
import FormInput from "../Form Input/FormInputComponent";
import CustomButton from "../custom-button/CustomButton";

import UseLoginAndSignin from "../../Custom Hooks/useLoginSignup";

import { SignUpStyle, GlobalCss } from "./SignupStyle";
import { useDispatch } from "react-redux";
import { studentRegistrationStart } from "../../redux/admin/action";

const SignUp = () => {
  const dispatch = useDispatch();

  const [studentData, studentDataHandler] = UseLoginAndSignin({
    name: "",
    email: "",
    motherName: "",
    fatherName: "",
  });

  const { name, fatherName, email, motherName } = studentData;

  const Signup = async () => {};
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(studentRegistrationStart(studentData));
  };

  return (
    <SignUpStyle>
      <GlobalCss />
      <h2 className="title">Create new student</h2>

      <form className="sign_up_form" onSubmit={submitHandler}>
        <FormInput
          value={name}
          type="text"
          label="Name"
          name="name"
          onChange={studentDataHandler}
          required
        />
        <FormInput
          value={fatherName}
          type="text"
          label="Father Name"
          name="fatherName"
          onChange={studentDataHandler}
          required
        />
        <FormInput
          value={motherName}
          type="text"
          label="Mother Name"
          name="motherName"
          onChange={studentDataHandler}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={studentDataHandler}
          required
        />

        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </SignUpStyle>
  );
};

export default SignUp;
