import React, { useState } from "react";

import { Menu } from "antd";
import ButtonForMonth from "../Button/ButtonForMonth";

import { GlobalStyle } from "./attendance_style";

import { Left, Right, Main } from "./attendance_style";
import { useSelector } from "react-redux";

import TakeAttendance from "../../Faculty/Take attendance/TakeAttendance";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    name: label,
  };
}
const subjects = [
  "Web Technology",
  "Artificial Intelligence",
  "Computer Networking",
  "Software Engineering",
  "Cloud Computing",
];
const subjectsCode = {
  "Web Technology": "wt",
  "Artificial Intelligence": "ai",
  "Computer Networking": "cn",
  "Software Engineering": "se",
  "Cloud Computing": "cc",
};

const items = subjects.map((data) => {
  return getItem(data);
});

const Attendance = () => {
  const [chooseSubject, setChooseSubject] = useState("");
  const { role } = useSelector(({ loginReducer }) => loginReducer);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Left>
          {role === "user" && (
            <Menu
              mode="inline"
              style={{
                width: 256,
              }}
              onClick={(e) => {
                setChooseSubject(subjectsCode[e.domEvent.target.outerText]);
              }}
              items={items}
            />
          )}
          {role === "faculty" && <TakeAttendance />}
        </Left>

        <Right className="kishore">
          {role === "user" && (
            <ButtonForMonth
              className={chooseSubject ? "block" : "none"}
              chooseSubject={chooseSubject}
            />
          )}
        </Right>
      </Main>
    </>
  );
};

export default Attendance;
