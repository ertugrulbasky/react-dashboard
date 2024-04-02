import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, Space, Typography } from "antd";
import { useNavigate } from "react-router";
import UserList from "../users";
import Reports from "../reports/Reports";
import "./styles/layout.scss";
import useMenuItems from "./hooks/useMenuItems";
import userSettingsMenuItems from "./hooks/userSettingsMenuItems";

const { Header, Content, Footer, Sider } = Layout;

const BasicLayout = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("reports");
  const { menuItems } = useMenuItems();
  const { settingsMenuItems } = userSettingsMenuItems();
  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  });

  const onClick = ({ key }) => {
    if (key === "logout") {
      localStorage.removeItem("isLogin");
      navigate("/");
    }
  };

  const handleMenuSelect = (item) => {
    setActiveKey(item.key);
  };

  const renderContent = () => {
    if (activeKey === "users") {
      return <UserList />;
    } else {
      return <Reports />;
    }
  };

  return (
    <Layout className="generalLayoutStyle">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={activeKey}
          items={menuItems}
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Layout className="generalLayoutStyle">
        <Header className="headerStyle">
          <Dropdown
            menu={{
              items: settingsMenuItems,
              selectable: true,
              onClick,
            }}
          >
            <Typography.Link className="typographyStyle">
              <Space>
                <UserOutlined className="userSettingsIcon" />
              </Space>
            </Typography.Link>
          </Dropdown>
        </Header>
        <Content className="contentStyle">
          <div className="renderContentStyle">{renderContent()}</div>
        </Content>
        <Footer className="footerStyle">
          n11 Admin Dashboard ©{new Date().getFullYear()} Created by n11
        </Footer>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
