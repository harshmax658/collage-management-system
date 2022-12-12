import React from "react";
import FormInput from "../Form Input/FormInputComponent";
import CustomButton from "../custom-button/CustomButton";

import UseLoginAndSignin from "../../Custom Hooks/useLoginSignup";

import { SignUpStyle, GlobalCss } from "./SignupStyle";
import { useDispatch, useSelector } from "react-redux";
import { studentRegistrationStart } from "../../redux/admin/action";
import { BorderTopOutlined } from "@ant-design/icons";
import { message } from "antd";
import NotificationBox from "../notificationBox/NotificationBox";
import { useEffect } from "react";

const SignUp = () => {
  // const [api, contextHolder] = notification.useNotification();

  // const { status, loading } = useSelector(({ adminReducer }) => adminReducer);

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
    }, 1000);
  };

  const dispatch = useDispatch();

  const [studentData, studentDataHandler] = UseLoginAndSignin({
    name: "a",
    email: "kkk@gmail.com",
    motherName: "v",
    fatherName: "s",
  });

  const { name, fatherName, email, motherName } = studentData;

  const notificationHandler = (message, status) => {
    if (status === 200) {
      openMessage(message, "success");
      // openNotification("top");
      // api.info({
      //   message: ` ${message}`,
      //   placement: "top",
      // });
    } else {
      openMessage(message, "error");
      // openNotification("top");
      // api.info({
      //   message: ` ${message}`,
      //   placement: "top",
      // });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(studentRegistrationStart({ studentData, notificationHandler }));
  };
  // useEffect(() => {}, [status, submitHandler]);
  return (
    <SignUpStyle>
      {contextHolder}
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
        <NotificationBox />
      </form>
    </SignUpStyle>
  );
};

export default SignUp;
