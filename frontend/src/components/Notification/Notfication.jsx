import { message } from "antd";

const Notfication = (resetValues) => {
  const [messageApi, contextHolder] = message.useMessage();

  const key = "updatable";
  const openMessage = (msg, status, resetValues, id) => {
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

      if (status === "success") resetValues(id);
    }, 1000);
  };
  const notificationHandler = (message = "jj", status = 200, id) => {
    if (status === 200) {
      openMessage(message, "success", resetValues, id);
    } else {
      openMessage(message, "error");
    }
  };
  return { contextHolder, openMessage, notificationHandler };
};

export default Notfication;
