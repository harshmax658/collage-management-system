import React, { useEffect, useState } from "react";
import { Avatar, List, Button } from "antd";
const StudentList = ({ studentList }) => {
  const { name, rollNo, img } = studentList;
  console.log(studentList);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <div className="left">
        <div className="boxs">
          <Avatar className="avatar" src={img} />
          <div className="user">
            <div className="name">{name}</div>
            <div className="roll"> {rollNo}</div>
          </div>
        </div>
      </div>
      <div className="right">
        <Button
          type="primary"
          onClick={() => setToggle(!toggle)}
          danger={toggle}
        >
          {!toggle ? "Mark" : "Unmark"}
        </Button>
      </div>
    </div>
  );
};
export default StudentList;
