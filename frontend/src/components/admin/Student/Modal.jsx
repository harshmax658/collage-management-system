import { useState } from "react";

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

const { Option } = Select;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const Modal = ({ modal, setModal, studentData, modalValue }) => {
  const [open, setOpen] = useState(modal);
  const [h, sh] = useState("harsh");
  const { name, dob, mobile, email, hightSchool, interMidiate } = studentData;
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
                          value={h}
                          type="text"
                          name="name"
                          placeholder="Basic usage"
                        />
                      </>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="name" label="Url">
                      <>
                        <Input
                          value={h}
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
                    <Form.Item
                      name="owner"
                      label="Owner"
                      rules={[
                        {
                          required: true,
                          message: "Please select an owner",
                        },
                      ]}
                    >
                      <Select placeholder="Please select an owner">
                        <Option value="xiao">Xiaoxiao Fu</Option>
                        <Option value="mao">Maomao Zhou</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="type"
                      label="Type"
                      rules={[
                        {
                          required: true,
                          message: "Please choose the type",
                        },
                      ]}
                    >
                      <Select placeholder="Please choose the type">
                        <Option value="private">Private</Option>
                        <Option value="public">Public</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="approver"
                      label="Approver"
                      rules={[
                        {
                          required: true,
                          message: "Please choose the approver",
                        },
                      ]}
                    >
                      <Select placeholder="Please choose the approver">
                        <Option value="jack">Jack Ma</Option>
                        <Option value="tom">Tom Liu</Option>
                      </Select>
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
                      <DatePicker.RangePicker
                        style={{
                          width: "100%",
                        }}
                        getPopupContainer={(trigger) => trigger.parentElement}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="description"
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: "please enter url description",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={4}
                        placeholder="please enter url description"
                      />
                    </Form.Item>
                  </Col>
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
