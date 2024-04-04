import { Row, Spin } from "antd";

const Loading = () => (
  <Row
    justify="center"
    align="middle"
    style={{ height: "100vh", width: "100%" }}
  >
    <Spin style={{ textAlign: "center" }} size="large" />
  </Row>
);

export default Loading;
