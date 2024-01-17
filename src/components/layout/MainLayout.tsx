import { createElement } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const items: MenuProps["items"] = [
    {
        key: "key1",
        label: "Dashboard",

    },
    {
        key: "key2",
        label: "Profile",

    },
    {
        key: "key3",
        label: "User Management",
        children: [
            {
                key: "key4",
                label: "Profile",

            },
            {
                key: "key5",
                label: "Profile",

            },
            {
                key: "key6",
                label: "Profile",

            },
        ]

    },
]

const MainLayout = () => {
    return (
        <Layout style={{ "height": "100vh" }}>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <h1>the main content should</h1>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;