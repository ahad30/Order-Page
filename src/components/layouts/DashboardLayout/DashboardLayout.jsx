import { Link, Outlet } from "react-router-dom";

import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { FiBox } from "react-icons/fi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

const DashboardLayout = () => {
  const items = [
    {
      key: 1,
      icon: <FiBox size={20}></FiBox>,
      label: <Link to={"/dashboard/product"}>Product</Link>,
    },
    {
      key: 2,
      icon: (
        <MdOutlineShoppingCartCheckout
          size={20}
        ></MdOutlineShoppingCartCheckout>
      ),
      label: <Link to={"/dashboard/order"}>Order</Link>,
    },
    {
      key: 3,
      icon: <MdOutlinePayments size={20}></MdOutlinePayments>,
      label: <Link to={"/dashboard/transaction"}>Transaction</Link>,
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
