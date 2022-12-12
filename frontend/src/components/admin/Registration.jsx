import React from "react";
import { GlobalStyle } from "./Admin_style";

import SignUp from "../signUp/SignUp";

const Registration = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Form>
        <div className="name">
          <Form.Item
            name="name"
            label="First Name"
            rules={[
              {
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Last Name"
            rules={[
              {
                required: true,

                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
      </Form> */}
      <SignUp />
    </>
  );
};
export default Registration;
