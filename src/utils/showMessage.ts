import { message } from "antd";

const showMessage = (
  type: "error" | "success" | "warning" | "info",
  content: string
) => {
  switch (type) {
    case "success":
      return message.success(content);
    case "error":
      return message.error(content);
  }
};

export default showMessage;
