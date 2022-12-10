import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { Menu } from "antd";

import { useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const CustomMenu = () => {
  const { role } = useSelector(({ loginReducer }) => loginReducer);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const checkNav = () => {
    if (pathname === "/") return "/";
    return pathname.slice(1);
  };

  const selectRole = () => {
    if (role === "user")
      return [
        {
          key: "/",
          icon: <DashboardIcon />,
          label: "Dashboard",
          onClick: () => navigate("/"),
        },
        {
          key: "attendance",
          icon: <FaUserGraduate />,
          label: "Attendance",
          onClick: () => navigate("/attendance"),
        },
        {
          key: "timetable",
          icon: <AccessTimeIcon />,
          label: "Timetable",
          onClick: () => navigate("/timetable"),
        },
        {
          key: "grades",
          icon: <AiOutlineProfile />,
          label: "Grades",
          onClick: () => navigate("/grades"),
        },
        {
          key: "news",
          icon: <NotificationsIcon />,
          label: "News",
          onClick: () => navigate("/news"),
        },
      ];

    if (role === "faculty")
      return [
        {
          key: "/",
          icon: <DashboardIcon />,
          label: "Dashboard",
          onClick: () => navigate("/"),
        },
        {
          key: "attendance",
          icon: <FaUserGraduate />,
          label: "Attendance",
          onClick: () => navigate("/attendance"),
        },

        {
          key: "assignment",
          icon: <NotificationsIcon />,
          label: "Assignment",
          onClick: () => navigate("/assignment"),
        },
      ];
    // if (role === "admin")
    return [
      {
        key: "/",
        icon: <DashboardIcon />,
        label: "register",
        onClick: () => navigate(`register`),
      },
      {
        key: "attendance",
        icon: <FaUserGraduate />,
        label: "modify",
        onClick: () => navigate(`modify`),
      },
    ];
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      // defaultSelectedKeys={[]}
      selectedKeys={checkNav()}
      items={selectRole()}
    />
  );
};

export default CustomMenu;
