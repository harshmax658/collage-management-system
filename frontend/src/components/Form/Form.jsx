import React, { useState } from "react";
import { GlobalCss, FormContainer, FormTag } from "./form_style";
import { Button, Drawer } from "antd";
import FormInputComponent from "../../components/Form Input/FormInputComponent";

import useLoginSignup from "../../Custom Hooks/useLoginSignup";

import CustomButton from "../custom-button/CustomButton";

import { useDispatch } from "react-redux";
import { studentLoginStart } from "../../redux/login/action";

const Form = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [hideBtn, setHideBtn] = useState(false);

  const [formData, formDataHandler] = useLoginSignup({
    emailOrMobile: "9911299826",
    password: "CMS@2022",
  });

  const showDrawer = () => {
    setOpen(true);
    setHideBtn(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const loginHandler = () => {
    console.log("call");
    console.log(formData);
    if (formData.emailOrMobile && formData.password) {
      dispatch(studentLoginStart(formData));
    }
  };
  return (
    <FormContainer>
      <div className="site-drawer-render-in-current-wrapper bgNone">
        <div
          style={{
            marginTop: 16,
          }}
        >
          <GlobalCss />
          {!hideBtn && (
            // <Button type="primary" onClick={showDrawer}>
            //   Login
            // </Button>
            <CustomButton onClick={showDrawer}>Login</CustomButton>
          )}
        </div>
        <Drawer
          title="Login"
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          getContainer={false}
          className="bgNone"
        >
          {/* <p onClick={() => setOpen(falsx`e)}>Some contents...</p> */}
          <FormTag>
            <FormInputComponent
              label="email / mobile"
              name="emailOrMobile"
              type="text"
              id="emailOrMobile"
              required
              htmlFor={"emailOrMobile"}
              value={formData.emailOrMobile}
              onChange={formDataHandler}
            />
            <FormInputComponent
              label="password"
              name="password"
              type="password"
              id="password"
              required
              htmlFor={"password"}
              value={formData.password}
              onChange={formDataHandler}
            />
            <div className="btn">
              <Button
                type="primary"
                danger
                onClick={() => {
                  setOpen(false);
                  setHideBtn(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" onClick={loginHandler}>
                Login
              </Button>
            </div>
          </FormTag>
        </Drawer>
      </div>
    </FormContainer>
  );
};
export default Form;
