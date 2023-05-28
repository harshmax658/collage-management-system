import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Popconfirm } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateLoadingState,
  deleteStudentStart,
} from "../../../redux/admin/action";
import SpinLoader from "../../SpinLoader/SpinLoader";
import Modal from "../Student/Modal";
import Notfication from "../../Notification/Notfication";

const { Column } = Table;

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [studentData, setStudentData] = useState({});

  const dispatch = useDispatch();

  const filterStudentList = (id) => {
    const newFilterList = students.filter((data) => {
      return id !== data.key;
    });

    setStudents(newFilterList);

    setDeleteLoading(false);
  };

  const { facultyList, loading } = useSelector(
    ({ adminReducer }) => adminReducer
  );
  const { contextHolder, notificationHandler } = Notfication({
    filterStudentList,
  });

  useEffect(() => {
    let sNo = 0;
    facultyList.forEach((element) => {
      const { _id, name, date, month, year, fatherName } = element;
      setStudents((prev) => {
        return [
          ...prev,
          {
            sNO: ++sNo,
            key: _id,
            name: name,
            dob: `${date}/${month}/${year}`,
            fName: fatherName,
            tags: ["Faculty"],
            ...element,
          },
        ];
      });
    });
    if (facultyList) {
      setTimeout(() => {
        dispatch(updateLoadingState(false));
      }, 1500);
    }
    return () => {
      setStudents([]);
      dispatch(updateLoadingState(true));
    };
  }, [facultyList]);

  const deleteStudent = (id) => {
    setDeleteLoading(!deleteLoading);

    dispatch(deleteStudentStart({ id: id, notificationHandler }));
  };
  return !loading ? (
    <>
      {contextHolder}
      <Table dataSource={students} pagination={false} loading={deleteLoading}>
        <Column title="S.No" dataIndex="sNO" key="sNO" />
        <Column title="Name" dataIndex="name" key="name" />

        <Column title="Father Name" dataIndex="fName" key="fName" />
        <Column title="D.O.B" dataIndex="dob" key="dob" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a
                onClick={() => {
                  setStudentData(record);
                  setModal(true);
                  setModalValue("view");
                }}
              >
                View
              </a>
              <a
                onClick={() => {
                  setStudentData(record);
                  setModal(true);
                  setModalValue("edit");
                }}
              >
                Edit
              </a>
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                okText="Yes"
                cancelText="No"
                onConfirm={(e) => {
                  deleteStudent(record.key);
                }}
              >
                <a>Delete</a>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          studentData={studentData}
          modalValue={modalValue}
          setModalValue={setModalValue}
          source="faculty"
        />
      )}
    </>
  ) : (
    <div className="center">
      <SpinLoader />
    </div>
  );
};
export default StudentList;
