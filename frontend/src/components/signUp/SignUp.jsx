import React from "react";
import FormInput from "../Form Input/FormInputComponent";
import CustomButton from "../custom-button/CustomButton";

import { SignUpStyle, GlobalCss } from "./SignupStyle";
import { useDispatch } from "react-redux";
import {
  facultyRegistrationStart,
  studentRegistrationStart,
} from "../../redux/admin/action";

import { DatePicker, Space, Select, Radio } from "antd";

import { useState } from "react";
import Notfication from "../Notification/Notfication";

const SignUp = ({
  course,
  studentData,
  studentDataHandler,
  studentDob,
  setStudentDob,
  resetValues,
  newCourse,
  addFaculty,
  items,
  handleChange,
  courseData,
  setCourseData,
  courseHandler,
  facultyData,
  facultyDataHandler,
  dob,
  setDob,
  semester,
}) => {
  const { contextHolder, notificationHandler } = Notfication(resetValues);

  const [section, setSection] = useState("");
  const onRadio = (e) => {
    setSection(e.target.value);
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
  } = studentData || facultyData || [];

  const onChange = (date) => {
    if (date.$d.getFullYear()) {
      if (facultyData) {
        setDob({
          date: date.$d.getDay(),
          month: date.$d.getMonth() + 1,
          year: date.$d.getFullYear(),
        });
      } else {
        setStudentDob({
          date: date.$d.getDay(),
          month: date.$d.getMonth() + 1,
          year: date.$d.getFullYear(),
        });
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (addFaculty) {
      const facultyDataNew = {
        ...facultyData,
        ...dob,
      };
      dispatch(
        facultyRegistrationStart({ facultyDataNew, notificationHandler })
      );
    } else {
      const studentDataNew = {
        ...studentData,
        ...studentDob,
        course: course,
        section: section,
      };
      if (course === "MCA") {
        delete studentDataNew.ug;
      }
      studentDataNew.role = "student";
      dispatch(
        studentRegistrationStart({ studentDataNew, notificationHandler })
      );
    }
  };

  return (
    <SignUpStyle>
      {contextHolder}
      <GlobalCss />
      <h2 className="title">{`Add new ${
        newCourse ? "course" : addFaculty ? "faculty" : "student"
      }`}</h2>

      {newCourse ? (
        <div className="newCourse">
          <form className="sign_up_form" onSubmit={courseHandler}>
            <div className="formContainer">
              <FormInput
                value={courseData.name}
                type="text"
                label="Course name"
                name="name"
                onChange={(e) => {
                  const { value, name } = e.target;
                  setCourseData((prev) => {
                    return { ...prev, [name]: value };
                  });
                }}
                required
              />
              <>
                <Select
                  defaultValue="1"
                  style={{
                    width: 120,
                  }}
                  name="semester"
                  onChange={handleChange}
                  options={items}
                />
              </>
            </div>
            <CustomButton type="submit">Submit</CustomButton>
          </form>
          {/* <div className="dropDown">
            <CourseModal openDrawer={openDrawer} onClose={onClose} />
          </div> */}
        </div>
      ) : addFaculty ? (
        <form className="sign_up_form" onSubmit={submitHandler}>
          <div className="formContainer">
            <FormInput
              value={name}
              type="text"
              label="Name"
              name="name"
              onChange={facultyDataHandler}
              required
            />
            <FormInput
              value={fatherName}
              type="text"
              label="Father Name"
              name="fatherName"
              onChange={facultyDataHandler}
              required
            />
            <FormInput
              value={motherName}
              type="text"
              label="Mother Name"
              name="motherName"
              onChange={facultyDataHandler}
              required
            />
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={facultyDataHandler}
              required
            />
            <Space direction="vertical">
              <DatePicker placeholder="DOB" onChange={onChange} />
            </Space>

            <FormInput
              type="text"
              name="mobile"
              label="Mobile"
              value={mobile}
              onChange={facultyDataHandler}
              required
            />
          </div>
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      ) : (
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
            {semester == 4 && (
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
            <Radio.Group onChange={onRadio} value={section}>
              <Radio value={"A"}>A</Radio>
              <Radio value={"B"}>B</Radio>
            </Radio.Group>
          </div>
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      )}
    </SignUpStyle>
  );
};

export default SignUp;
