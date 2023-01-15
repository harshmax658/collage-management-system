import React, { useState } from "react";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourseStart } from "../../../redux/admin/action";

const options = [];
const CourseOption = () => {
  const { courses } = useSelector(({ adminReducer }) => adminReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState("");
  const [options, setOptions] = useState([]);

  const courseGenerator = (data) => {
    data.forEach((element) => {
      setOptions((prev) => {
        return [...prev, { label: element.name, value: element.name }];
      });
    });
  };
  useEffect(() => {
    dispatch(getCourseStart());
  }, []);
  useEffect(() => {
    courseGenerator(courses);
    console.log("courses");
    console.log(options);
  }, [courses]);

  const onChange = ({ target: { value } }) => {
    setCourse(value);
    // setSelect(true);
  };
  return (
    <>
      {options.length > 0 ? (
        <Radio.Group
          options={options}
          onChange={onChange}
          value={course}
          optionType="button"
        />
      ) : (
        "loading..."
      )}
    </>
  );
};

export default CourseOption;
