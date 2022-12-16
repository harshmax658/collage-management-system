import React from "react";
import FormInput from "../Form Input/FormInputComponent";
import CustomButton from "../custom-button/CustomButton";

import UseLoginSignin from "../../Custom Hooks/useLoginSignup";

import { SignUpStyle, GlobalCss } from "./SignupStyle";
import { useDispatch, useSelector } from "react-redux";
import { studentRegistrationStart } from "../../redux/admin/action";

import { message, DatePicker, Space } from "antd";
import NotificationBox from "../notificationBox/NotificationBox";
import { useState } from "react";
import { useEffect } from "react";

const SignUp = ({
  course,
  studentData,
  studentDataHandler,
  studentDob,
  setStudentDob,
  resetValues,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = (msg, status) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: status,
        content: msg,
        duration: 2,
      });
      if (status === "success") resetValues();
    }, 1000);
  };

  const dispatch = useDispatch();

  const {
    name,
    fatherName,
    email,
    motherName,
    hightSchool,
    interMidiate,
    mobile,
    ug,
  } = studentData;

  const onChange = (date) => {
    if (date.$d.getFullYear()) {
      setStudentDob({
        date: date.$d.getDay(),
        month: date.$d.getMonth() + 1,
        year: date.$d.getFullYear(),
      });
    }
  };

  const notificationHandler = (message, status) => {
    if (status === 200) {
      openMessage(message, "success", resetValues);
    } else {
      openMessage(message, "error");
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const studentDataNew = { ...studentData, ...studentDob };
    if (course === "MCA") {
      delete studentDataNew.ug;
    }
    studentDataNew.role = "student";
    console.log(studentDataNew);
    dispatch(studentRegistrationStart({ studentDataNew, notificationHandler }));
  };

  return (
    <SignUpStyle>
      {contextHolder}
      <GlobalCss />
      <h2 className="title">Create new student</h2>

      <form className="sign_up_form" onSubmit={submitHandler}>
        <div className="formContainer">
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
          <Space direction="vertical">
            <DatePicker placeholder="DOB" onChange={onChange} />
          </Space>
          <FormInput
            type="text"
            name="hightSchool"
            label="10th Percentage"
            value={hightSchool}
            onChange={studentDataHandler}
            required
          />
          <FormInput
            type="text"
            name="interMidiate"
            label="12th Percentage"
            value={interMidiate}
            onChange={studentDataHandler}
            required
          />
          {course === "MCA" && (
            <FormInput
              type="text"
              name="ug"
              label="Graduation Percentage"
              value={ug}
              onChange={studentDataHandler}
              required
            />
          )}
          <FormInput
            type="text"
            name="mobile"
            label="Mobile"
            value={mobile}
            onChange={studentDataHandler}
            required
          />
        </div>
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </SignUpStyle>
  );
};

export default SignUp;
