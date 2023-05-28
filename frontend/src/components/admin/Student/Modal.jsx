import { TreeSelect } from "antd";
import { useEffect, useState } from "react";

import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Divider,
} from "antd";
import CourseOption from "./CourseOption";
import { useSelector } from "react-redux";
const { SHOW_PARENT } = TreeSelect;

const { Option } = Select;
const treeDpata = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
        key: "0-0-0",
      },
    ],
  },

  // {
  //   title:data,
  //   value: data,
  //   key: {data},
  //   children: [
  //     {
  //       title: "A",
  //       value: "A",
  //       key: "A",
  //     },

  //   ],
  // },
];

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Modal = ({ modal, setModal, studentData, modalValue, source }) => {
  const [treeData, setTreeData] = useState([]);
  const [open, setOpen] = useState(modal);
  // const [selectCourse, setSelectCourse] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(["0-0-0"]);
  const onChange = (newValue) => {
    console.log("onChange ", value);
    setValue(newValue);
  };
  const getCourseData = async () => {
    const getData = await fetch(`/api/course/get-subject-of-course/${course}`);
    console.log(getData);
    if (getData.status === 200) {
      const jsonData = await getData.json();

      const data = jsonData.data.map((data) => {
        return {
          title: data,
          value: data,
          key: { data },
          children: [
            {
              title: "A",
              value: "A",
              key: "A",
            },
            {
              title: "B",
              value: "B",
              key: "B",
            },
          ],
        };
      });
      setTreeData(data);
      console.log(treeData);
      console.log(jsonData);
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    if (course !== "") getCourseData();
  }, [course]);
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };
  // const {courses}=useSelector(({adminReducer})=>adminReducer)

  const {
    name,
    dob,
    mobile,
    email,
    hightSchool,
    interMidiate,
    fatherName,
    motherName,
    section,
    ug,
    year,
    date,
    month,
  } = studentData;
  console.log(studentData);
  const onClose = () => {
    setOpen(false);
    setModal(false);
  };

  return (
    <>
      <Drawer
        width={modalValue === "edit" ? 720 : 640}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 0,
        }}
      >
        <>
          {modalValue === "view" ? (
            <>
              <p
                className="site-description-item-profile-p"
                style={{
                  marginBottom: 24,
                }}
              >
                Student Profile
              </p>
              <p className="site-description-item-profile-p">Personal</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Full Name" content={name} />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Account"
                    content="AntDesign@example.com"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="City" content="Ghaziabad" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Country" content="India" />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Birthday" content={dob} />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Website" content="-" />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Message"
                    content="Make things as simple as possible but no simpler."
                  />
                </Col>
              </Row>
              <Divider />
              <p className="site-description-item-profile-p">Education</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem
                    title="High School"
                    content={`${hightSchool}%`}
                  />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Inter Midiate"
                    content={`${interMidiate}%`}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Department" content="XTech" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Skills"
                    content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                  />
                </Col>
              </Row>
              <Divider />
              <p className="site-description-item-profile-p">Contacts</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Email" content={email} />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Phone Number" content={mobile} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Github"
                    content={
                      <a href="http://github.com/ant-design/ant-design/">
                        github.com/ant-design/ant-design/
                      </a>
                    }
                  />
                </Col>
              </Row>
            </>
          ) : (
            <>
              <div className="titleEditStudent">
                <div className="title">Edit student details</div>
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button onClick={onClose} type="primary">
                    Submit
                  </Button>
                </Space>
              </div>
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter user name",
                        },
                      ]}
                    >
                      <>
                        <Input
                          value={name}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="name" label="Email">
                      <>
                        <Input
                          value={email}
                          type="email"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="name" label="Father Name">
                      <>
                        <Input
                          value={fatherName}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="name" label="Mother Name">
                      <>
                        <Input
                          value={motherName}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="name" label="Mobile">
                      <>
                        <Input
                          value={mobile}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="dateTime"
                      label="DateTime"
                      rules={[
                        {
                          required: true,
                          message: "Please choose the dateTime",
                        },
                      ]}
                    >
                      <Space direction="vertical">
                        <DatePicker
                          placeholder="DOB"
                          // value={}
                          onChange={() => {}}
                        />
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="name" label="High School">
                      <>
                        <Input
                          value={hightSchool}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="name" label="Intermediate ">
                      <>
                        <Input
                          value={interMidiate}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="name" label="Section">
                      <>
                        <Input
                          value={section}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  {ug && (
                    <Col span={12}>
                      <Form.Item name="name" label="UG">
                        <>
                          <Input
                            value={ug}
                            type="text"
                            name="name"
                            placeholder="Basic usage"
                          />
                        </>
                      </Form.Item>
                    </Col>
                  )}
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <CourseOption
                      setSelectCourse={setCourse}
                      course={course}
                      setCourse={setCourse}
                      setLoading={setLoading}
                      update={true}
                    />
                    <Form.Item name="name" label="Update Course">
                      <TreeSelect {...tProps} />;
                      <>
                        <Input
                          value={section}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  {ug && (
                    <Col span={12}>
                      <Form.Item name="name" label="UG">
                        <>
                          <Input
                            value={ug}
                            type="text"
                            name="name"
                            placeholder="Basic usage"
                          />
                        </>
                      </Form.Item>
                    </Col>
                  )}
                </Row>
              </Form>
            </>
          )}
        </>
      </Drawer>

      {/* <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button> */}
    </>
  );
};
export default Modal;
