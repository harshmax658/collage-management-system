import React, { useState } from "react";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCourseStart,
  getCourseStudentStart,
} from "../../../redux/admin/action";

import SpinLoader from "../../SpinLoader/SpinLoader";
const CourseOption = ({
  course,
  setCourse,
  setLoading,
  update,
  setSemester,
  setSelectCourse,
}) => {
  const { courses } = useSelector(({ adminReducer }) => adminReducer);
  const dispatch = useDispatch();
  const [options, setOptions] = useState({});

  const courseGenerator = (data) => {
    data.forEach((element) => {
      setOptions((prev) => {
        return {
          ...prev,
          [element.name]: {
            label: element.name,
            value: element.name,
            semester: element.semester,
          },
        };
      });
    });
  };

  useEffect(() => {
    dispatch(getCourseStart());
    return () => setOptions([]);
  }, []);
  useEffect(() => {
    if (Object.entries(options).length === 0) {
      courseGenerator(courses);
    }
  }, [courses]);

  const onChange = ({ target: { value } }) => {
    setLoading(true);
    if (setSemester) setSemester(options[value].semester);
    setCourse(value);
    setSelectCourse(value);
    if (update) dispatch(getCourseStudentStart(value));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {Object.entries(options).length > 0 ? (
        <Radio.Group
          options={Object.entries(options).map(
            ([name, { semester, value, label }]) => {
              return { semester, value, label };
            }
          )}
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
