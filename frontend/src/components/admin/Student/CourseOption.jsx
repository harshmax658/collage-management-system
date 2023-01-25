import React, { useState } from "react";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCourseStart,
  getCourseStudentStart,
} from "../../../redux/admin/action";

import SpinLoader from "../../SpinLoader/SpinLoader";
const CourseOption = ({ course, setCourse, setLoading }) => {
  const { courses, loading } = useSelector(({ adminReducer }) => adminReducer);
  const dispatch = useDispatch();
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
    return () => setOptions([]);
  }, []);
  useEffect(() => {
    if (options.length === 0) {
      courseGenerator(courses);
    }
  }, [courses]);

  const onChange = ({ target: { value } }) => {
    setLoading(true);
    setCourse(value);

    dispatch(getCourseStudentStart(value));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <div className="center">
          <SpinLoader />
        </div>
      )}
    </>
  );
};

export default CourseOption;
