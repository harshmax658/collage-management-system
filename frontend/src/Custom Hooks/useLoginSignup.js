import React, { useState } from "react";

const useLoginSignup = (value) => {
  const [formData, setFormData] = useState(value);

  const formDataHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const resetValues = () => {
    setFormData(value);
  };

  return [formData, formDataHandler, resetValues];
};

export default useLoginSignup;
// harsh
