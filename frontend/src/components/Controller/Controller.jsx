import React, { useState } from "react";
import { GlobalCss } from "./controller_style";

import { Layout } from "antd";
import CustomMenu from "./Menu";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutStudent } from "../../redux/login/action";
const { Header, Sider, Content } = Layout;

const Controller = () => {
  const { name, role } = useSelector(({ loginReducer }) => loginReducer);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const distaptch = useDispatch();

  console.log(role);
  return (
    <Layout className="h100Vh">
      <GlobalCss />
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" onClick={() => navigate("/")}>
          CMS
        </div>
        <CustomMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          {/* User Name */}

          {role !== "admin" && name}
          <button
            onClick={() => {
              distaptch(logoutStudent());
            }}
          >
            LogOut
          </button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Controller;
