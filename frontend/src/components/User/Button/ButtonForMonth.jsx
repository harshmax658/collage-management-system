import React, { useState } from "react";

import { Space, message } from "antd";

import AttendanceModel from "../Attendance/AttendanceModel";

const monthsArray = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

const ButtonForMonth = ({ chooseSubject, className }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    setTimeout(() => {
      messageApi.open({
        key,
        type: "warning",
        content: "Please choose subject",
        duration: 2,
      });
    }, 100);
  };

  return (
    <>
      {contextHolder}
      <Space
        direction="vertical"
        className={className}
        onMouseEnter={() => {
          if (!chooseSubject) openMessage();
        }}
      >
        <Space wrap>
          {Object.keys(monthsArray).map((month) => {
            return (
              <AttendanceModel
                key={month}
                months={monthsArray}
                chooseSubject={chooseSubject}
              >
                {month}
              </AttendanceModel>
            );
          })}
        </Space>
      </Space>
    </>
  );
};
export default ButtonForMonth;
