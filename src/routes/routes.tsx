import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RoutesGenerator } from "../utils/RoutesGenerator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "/admin",
        element: <App />,
        children: RoutesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,
        children: RoutesGenerator(adminPaths)
    },
    {
        path: "/student",
        element: <App />,
        children: RoutesGenerator(adminPaths)
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