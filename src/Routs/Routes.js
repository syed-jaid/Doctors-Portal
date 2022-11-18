import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointment />
            }
        ]
    },

]);