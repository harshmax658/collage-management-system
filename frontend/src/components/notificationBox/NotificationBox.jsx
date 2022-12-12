import React from "react";
import { BorderTopOutlined } from "@ant-design/icons";
import { Button, notification, Space } from "antd";

const NotificationBox = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification("top")}
          icon={<BorderTopOutlined />}
        >
          top
        </Button>
      </Space>
    </>
  );
};
export default NotificationBox;
