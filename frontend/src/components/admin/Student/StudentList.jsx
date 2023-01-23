import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateLoadingState } from "../../../redux/admin/action";
import SpinLoader from "../../SpinLoader/SpinLoader";
import Modal from "./Modal";

const { Column } = Table;

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { studentList, loading } = useSelector(
    ({ adminReducer }) => adminReducer
  );

  useEffect(() => {
    studentList.forEach((element) => {
      const { _id, name, date, month, year, fatherName } = element;
      setStudents((prev) => {
        return [
          ...prev,
          {
            key: _id,
            name: name,
            dob: `${date}/${month}/${year}`,
            fName: fatherName,
            tags: ["nice", "developer"],
          },
        ];
      });
    });
    if (studentList) {
      setTimeout(() => {
        dispatch(updateLoadingState(false));
      }, 1500);
    }
    return () => {
      setStudents([]);
      dispatch(updateLoadingState(true));
    };
  }, [studentList]);

  return !loading ? (
    <>
      <Table dataSource={students} pagination={false}>
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
              <a onClick={() => setModal(true)}>Edit </a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </>
  ) : (
    <div className="center">
      <SpinLoader />
    </div>
  );
};
export default StudentList;
