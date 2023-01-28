import { message } from "antd";

const Notfication = (callback) => {
  const [messageApi, contextHolder] = message.useMessage();

  const key = "updatable";
  const openMessage = (msg, status, callback, id) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: status,
        content: msg,
        duration: 2,
      });

      if (status === "success") {
        callback(id);
      }
    }, 1000);
  };
  const notificationHandler = (message = "jj", status = 200, id) => {
    if (status === 200) {
      openMessage(message, "success", callback, id);
    } else {
      openMessage(message, "error");
    }
  };
  return { contextHolder, openMessage, notificationHandler };
};

export default Notfication;
