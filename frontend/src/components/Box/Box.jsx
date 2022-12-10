import React from "react";
import { BoxModel } from "./box_style";

const Box = ({ children, ...otherProps }) => {
  return <BoxModel {...otherProps}>{children}</BoxModel>;
};

export default Box;
