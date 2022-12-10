import React, { useState, useEffect } from "react";
import {
  GlobalStyle,
  DashHeader,
  DashboardDownInfo,
  Layout,
} from "./dashboard_style";

import Box from "../../Box/Box";

import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import FeedIcon from "@mui/icons-material/Feed";

import { useSelector } from "react-redux";

const subjects = [
  "Web Technology",
  "Artificial Intelligence",
  "Computer Networking",
  "Software Engineering",
  "Cloud Computing",
];

const TopBox = {
  user: [
    {
      key: 1,
      color: "red",
      svg: <FaUserGraduate />,
      name: "Students",
      count: 0,
    },
    {
      key: 2,
      color: "red",
      svg: <GiTeacher />,
      name: "Faculty",
      count: 0,
    },
    {
      key: 3,
      color: "red",
      svg: <FeedIcon />,
      name: "News",
      count: 0,
    },
  ],
  faculty: [
    {
      key: 1,
      color: "red",
      svg: <FaUserGraduate />,
      name: "Students under me",
      count: 0,
    },
    {
      key: 2,
      color: "red",
      svg: <GiTeacher />,
      name: "My subjects",
      count: 0,
    },
    {
      key: 3,
      color: "red",
      svg: <FeedIcon />,
      name: "Issues",
      count: 0,
    },
  ],
};

const Dashboard = () => {
  const { role } = useSelector(({ loginReducer }) => loginReducer);
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const rr = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(rr);
  }, []);
  return (
    <Layout>
      <DashHeader>
        <GlobalStyle />
        {TopBox[role].map(({ key, color, svg, name, count }) => {
          return (
            <Box className={"df cPointer"} key={key}>
              <div style={{ color: color }} className="svg">
                {svg}
              </div>
              <div className="name">
                <div className="count">{count}</div>
                <div className="name">{name}</div>
              </div>
            </Box>
          );
        })}
      </DashHeader>

      {role === "user" && (
        <DashboardDownInfo>
          <div className="left">
            <div className="percentage">75%</div>
          </div>
          <div className="middle">
            <Box style={{ color: "white" }}>
              <div className="fee">
                <div className="name red"> Fee Status</div>
                <div className="status">
                  <div className="total">
                    Total Fee :<span>1,19,000</span>
                  </div>
                  <div className="paid">
                    Paid :<span>1,19,000</span>
                  </div>
                  <div className="rem">
                    Remaining : <span>1,19,000</span>
                  </div>
                </div>
              </div>
            </Box>
            <Box style={{ color: "white" }}>
              <div className="name">
                <div className="head name red">Date & Time</div>
                <div className="date count">03-12-2022 / {date}</div>
              </div>
            </Box>
          </div>

          <div className="right">
            <div className="heading name red">Subjects</div>
            <div className="containt">
              <ol>
                {subjects.map((data, key) => {
                  return <li key={key}>{data}</li>;
                })}
              </ol>
            </div>
          </div>
        </DashboardDownInfo>
      )}
    </Layout>
  );
};

export default Dashboard;
