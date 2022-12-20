import React, { useState } from "react";

import { Drawer } from "antd";
import { SemesterData } from "./AddNewCourse";
import { useContext } from "react";
import FormInputComponent from "../../Form Input/FormInputComponent";

const CourseModal = ({ openDrawer, onClose }) => {
  const { courseSemesterData, setCourseSemesterData } =
    useContext(SemesterData);

  const addSubject = (e) => {
    console.log(e);
    console.log(courseSemesterData[e]);
    setCourseSemesterData((prev) => {
      return {
        ...prev,
        [e]: [...courseSemesterData[e], <FormInputComponent />],
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
              console.log(data[0]);
              return (
                <>
                  {data[0]}{" "}
                  <button onClick={() => addSubject(data[0])}>+</button>
                  {data[1].map((data1) => {
                    return data1;
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
