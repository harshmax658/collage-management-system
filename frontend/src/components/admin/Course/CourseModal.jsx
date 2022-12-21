import React, { useState } from "react";

import { Drawer } from "antd";
import { SemesterData } from "./AddNewCourse";
import { useContext } from "react";
import FormInputComponent from "../../Form Input/FormInputComponent";
import useLoginSignup from "../../../Custom Hooks/useLoginSignup";

const CourseModal = ({ openDrawer, onClose }) => {
  const { courseSemesterData, setCourseSemesterData } =
    useContext(SemesterData);
  const [a, v] = useLoginSignup({});
  console.log(a);
  const addSubject = (e) => {
    setCourseSemesterData((prev) => {
      return {
        ...prev,
        [e]: [...courseSemesterData[e], FormInputComponent],
      };
    });
  };

  return (
    <>
      <div className="site-drawer-render-in-current-wrapper bgNone">
        {/* <GlobalCss /> */}
        <Drawer
          title="Login"
          placement="top"
          closable={false}
          onClose={onClose}
          open={openDrawer}
          getContainer={false}
          className="bgNone"
        >
          <p onClick={onClose}>
            {Object.entries(courseSemesterData).map((data) => {
              // console.log(data[0]);
              return (
                <>
                  {data[0]}
                  <button onClick={() => addSubject(data[0])}>+</button>
                  {data[1].map((Data1, key) => {
                    return (
                      <Data1
                        type="text"
                        onChange={v}
                        name={`${data[0] + key}`}
                        // value={`${a?.data[0] + key}`}
                      />
                    );
                  })}
                </>
              );
            })}
            .
          </p>
        </Drawer>
      </div>
    </>
  );
};

export default CourseModal;
