import { Alert, Space, Spin } from "antd";
const SpinLoader = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
  >
    <Space>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
export default SpinLoader;
