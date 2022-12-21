import React, { useState } from "react";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import useLoginSignup from "../../../Custom Hooks/useLoginSignup";
import { addNewCourseStart } from "../../../redux/admin/action";
import FormInputComponent from "../../Form Input/FormInputComponent";
import SignUp from "../../signUp/SignUp";

import { GlobalStyle } from "../Admin_style";

const items = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "7",
    value: "7",
  },
  {
    label: "8",
    value: "8",
  },
];

const semesterDataObj = {
  sem1: [FormInputComponent],

  sem2: [FormInputComponent],
};

const SemesterData = createContext();
const AddNewCourse = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [courseSemesterData, setCourseSemesterData] = useState(semesterDataObj);
  const dispatch = useDispatch();

  const [courseData, setCourseData] = useState({
    name: "",
    semester: 0,
  });

  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    // console.log(e.key);
    // if (e.key === "3") {
    setOpen(false);
    // }
  };

  const showDrawer = () => {
    setOpenDrawer(true);
    // setHideBtn(true);
  };

  const onClose = () => {
    // setOpenDrawer(false);
  };

  const handleChange = (value) => {
    // showDrawer(true);

    setCourseData((prev) => {
      return { ...prev, ["semester"]: value };
    });
  };
  const courseHandler = (e) => {
    e.preventDefault();
    dispatch(addNewCourseStart(courseData));
    setCourseData({
      name: "",
      semester: 0,
    });
  };

  return (
    <>
      <GlobalStyle />
      <SemesterData.Provider
        value={{ courseSemesterData, setCourseSemesterData }}
      >
        <SignUp
          newCourse={true}
          items={items}
          open={open}
          onClose={onClose}
          openDrawer={openDrawer}
          handleChange={handleChange}
          courseData={courseData}
          setCourseData={setCourseData}
          courseHandler={courseHandler}
        />
      </SemesterData.Provider>
    </>
  );
};

export default AddNewCourse;
export { SemesterData };
