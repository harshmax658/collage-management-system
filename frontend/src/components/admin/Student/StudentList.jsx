import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateLoadingState } from "../../../redux/admin/action";

const { Column } = Table;

const StudentList = () => {
  const [students, setStudents] = useState([]);
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

    return () => {
      setStudents([]);
      // dispatch(updateLoadingState(!loading));
      console.log("clean");
    };
  }, [studentList]);
  useEffect(() => {
    console.log(loading, "loading");
    // return () => dispatch(updateLoadingState(!loading));
  }, []);

  return !loading ? (
    <Table dataSource={students}>
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
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  ) : (
    "LOADING .."
  );
};
export default StudentList;
