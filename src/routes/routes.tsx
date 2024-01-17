import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    },

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])

export default router;