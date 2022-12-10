import React from "react";
import { GlobalCss, OverFlow } from "./news_style";

import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, mollitia consectetur adipisci ullam perferendis quod alias repellat libero reprehenderit temporibus eveniet illum a similique molestias ut id asperiores. Reiciendis, placeat?
Cumque quia, perspiciatis nobis sapiente iste id, similique sequi, unde delectus quam optio ut quas est commodi tempore inventore esse eum. Laudantium laboriosam facere incidunt suscipit optio porro quasi nihil.
Laboriosam aperiam molestiae ut voluptates quisquam neque, temporibus quos, quibusdam iure et modi, fugit aut dolorem vitae minus porro autem! Molestiae quam consequatur reiciendis earum ex, optio est eos et.
Nihil enim vero quis, quaerat id ratione eveniet esse sequi officia quasi odio modi, impedit totam iste voluptas. Corporis iure ullam libero commodi! Tempora fugit quaerat cumque et aliquid aut.
Modi quae iste, itaque obcaecati excepturi, nostrum cumque, sunt sequi eius distinctio soluta saepe accusantium. Pariatur, vel nihil provident, voluptas commodi nisi voluptates soluta nulla nam minima corrupti accusamus laboriosam?
`;

const News = () => {
  return (
    <OverFlow>
      <GlobalCss />
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        <Panel header="header 1" key="1" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
        <Panel header="header 2" key="2" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
        <Panel header="header 2" key="2" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
        <Panel header="header 2" key="2" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
        <Panel header="header 2" key="2" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
        <Panel header="header 2" key="2" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </OverFlow>
  );
};
export default News;
