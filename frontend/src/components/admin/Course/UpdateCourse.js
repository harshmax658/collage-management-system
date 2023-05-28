import React, { useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLoginSignup from "../../../Custom Hooks/useLoginSignup";
import { addNewCourseStart } from "../../../redux/admin/action";
import FormInputComponent from "../../Form Input/FormInputComponent";
import SignUp from "../../signUp/SignUp";

import { GlobalStyle } from "../Admin_style";
import CourseOption from "../Student/CourseOption";

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
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState("");
  const data = useSelector(({ adminReducer }) => adminReducer);
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true);
  const sendsubjectList = async () => {
    const sendData = await fetch(
      `/api/course/add-subejct-in-course/${course}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      }
    );
    if (sendData.status) {
      setList([]);
    } else {
      alert("error");
    }
  };
  return (
    <>
      <GlobalStyle />
      <CourseOption
        course={course}
        setCourse={setCourse}
        setLoading={setLoading}
        update={true}
      />
      {!loading && (
        <div className="addData">
          <div className="left">
            <p>Add new subject in {course}</p>
            <>
              <div className="main-div">
                <div className="child-div">
                  <div className="addItems">
                    <input
                      type="text"
                      placeholder="✍ Add Items..."
                      value={inputData}
                      onChange={(e) => setInputData(e.target.value)}
                    />

                    <button
                      onClick={() => {
                        setList((prev) => [...prev, inputData]);
                        setInputData("");
                      }}
                    >
                      Add
                    </button>
                  </div>

                  <div className="showItems">
                    {list.map((data, key) => {
                      return <div key={key}>{data}</div>;
                    })}
                  </div>
                  {list.length > 0 && (
                    <>
                      <button onClick={sendsubjectList}>Send Data</button>
                    </>
                  )}
                </div>
              </div>
            </>
          </div>
          <div className="right"></div>
        </div>
      )}
    </>
  );
};

export default AddNewCourse;
export { SemesterData };
