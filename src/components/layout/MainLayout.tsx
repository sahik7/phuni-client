import { Outlet } from "react-router-dom";
import { Button, Layout } from 'antd';
import Sidebar from "./Sidebar";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {

    const handleLogout = (){

    }
    return (
        <Layout style={{ "height": "100vh" }}>
            <Sidebar />
            <Layout>
                <Header ><Button onClick={handleLogout}>Logout</Button></Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <Outlet />
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