import { Outlet } from "react-router-dom";
function AdminLayout() {
    return (
        <div>
            <h1>This is navbar</h1>
            <Outlet />
        </div>
    )
}

export default AdminLayout