import React, { useState } from "react";

const useLoginSignup = (value) => {
  const [formData, setFormData] = useState(value);

  const formDataHandler = (e) => {
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
