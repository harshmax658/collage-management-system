import React, { useState } from "react";
import { Button, Drawer, List } from "antd";
import StudentList from "./StudentList";

const studentList = [
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
  {
    name: "Harsh Sharma",
    rollNo: 123,
    img: `https://cdn-icons-png.flaticon.com/512/25/25634.png`,
  },
];

const AttendanceDrawer = ({
  onClose,
  showChildrenDrawer,
  onChildrenDrawerClose,
  open,
  childrenDrawer,
}) => {
  return (
    <>
      <Drawer
        title="Choose section"
        width={childrenDrawer ? "55%" : "22%"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="sectionBtn">
          <Button type="primary" onClick={showChildrenDrawer}>
            Section A
          </Button>
          <Button type="primary" onClick={showChildrenDrawer}>
            Section B
          </Button>
        </div>
        <Drawer
          title="Student List"
          width={"50%"}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          className="innerDrawer"
        >
          <List>
            {studentList.map((data, key) => {
              return <StudentList key={key} studentList={data} />;
            })}
          </List>
        </Drawer>
      </Drawer>
    </>
  );
};
export default AttendanceDrawer;
