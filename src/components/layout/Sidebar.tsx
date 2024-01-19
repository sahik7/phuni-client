import { Layout, Menu } from 'antd';
import SidebarItemsGenerators from '../../utils/SidebarItemsGenerators';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
const { Sider } = Layout;

const useRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {
    const role = "faculty";
    let sidebarItems;

    switch (role) {
        case useRole.ADMIN:
            sidebarItems = SidebarItemsGenerators(adminPaths, useRole.ADMIN)
            break;
        case useRole.FACULTY:
            sidebarItems = SidebarItemsGenerators(facultyPaths, useRole.FACULTY)
            break;
        case useRole.STUDENT:
            sidebarItems = SidebarItemsGenerators(studentPaths, useRole.STUDENT)
            break;

        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div style={{ color: "white", height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>PH Uni</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;