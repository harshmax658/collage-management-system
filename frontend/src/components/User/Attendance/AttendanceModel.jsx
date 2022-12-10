import React, { useState } from "react";
import { Button, Modal } from "antd";

const AttendanceModel = ({ chooseSubject, children, months }) => {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);

  const daysCounter = () => {
    let daysCount = [];
    for (let i = 1; i <= days?.days; i++) {
      // console.log("first");
      daysCount.push(i);
    }
    return daysCount;
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        disabled={!chooseSubject && true}
        onClick={(e) => {
          showModal();
          setDays({
            month: e.target.innerText,
            days: months[e.target.innerText],
          });
        }}
      >
        {children}
      </Button>
      <Modal
        title={days?.month}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Issue"
      >
        {days && (
          <div id="box">
            {daysCounter().map((value) => {
              return <div className="box">{value}</div>;
            })}
          </div>
        )}
        <div className="notfy">
          <div className="red"></div>
          <span>Present</span>
          <div className="green"></div>
          <span>Absent</span>
        </div>
      </Modal>
    </>
  );
};
export default AttendanceModel;
