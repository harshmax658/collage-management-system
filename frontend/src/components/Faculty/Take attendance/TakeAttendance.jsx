import React, { useState } from "react";
import { GlobalCss } from "./attendance_style";

import AttendanceDrawer from "./AttendanceDrawer";
import { Divider, Menu } from "antd";

function getItem(label, key, icon, children, onclick) {
  return {
    key,
    icon,
    children,
    label,
    onclick,
  };
}
const subjects = [
  "Web Technology",
  "Artificial Intelligence",
  "Computer Networking",
  "Software Engineering",
  "Cloud Computing",
];

const items = [
  getItem("MCA", "3", null, [
    getItem(
      "Semester 1",
      "5",
      null,
      subjects.map((data, key) => getItem(data, key + 1))
    ),
    getItem("Semester 2", "5"),
  ]),
  getItem("BCA", "4", null, [
    getItem("Option 5", "5", null),
    getItem("Option 6", "6"),
  ]),
];

const TakeAttendance = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = (e) => {
    console.log(e.domEvent.target.outerText);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Divider type="vertical" />
      <GlobalCss />
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={"vertical"}
        theme={"light"}
        items={items}
        onClick={showDrawer}
      />
      <AttendanceDrawer
        showDrawer={showDrawer}
        onClose={onClose}
        showChildrenDrawer={showChildrenDrawer}
        onChildrenDrawerClose={onChildrenDrawerClose}
        open={open}
        childrenDrawer={childrenDrawer}
      />
    </>
  );
};
export default TakeAttendance;
