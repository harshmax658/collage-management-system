import React from "react";
import { GlobalCss } from "./customButton_style";

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherprops
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google_Sign_In" : ""
      } custom_button`}
      {...otherprops}
    >
      <GlobalCss />
      {children}
    </button>
  );
};

export default CustomButton;
