import React from "react";
import { GlobalCss } from "./FormInputStyle";

const FormInputComponent = ({ onchange, htmlFor, label, ...otherprops }) => {
  return (
    <div className="formInput_group">
      <GlobalCss />
      <input className="form_input" onChange={onchange} {...otherprops} />
      {label ? (
        <label
          className={`${
            otherprops?.value?.length ? "shrink" : ""
          } form_input_label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInputComponent;
// Harsh
