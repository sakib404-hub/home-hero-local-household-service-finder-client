import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([{
    path: '/',
    Component: Layout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/services',
            Component: Services
        },
        {
            path: '/myservices',
            Component: MyServices
        },
        {
            path: '/addservices',
            Component: AddServices
        },
        {
            path: '/mybookings',
            Component: MyBookings
        },
        {
            path: '/profile',
            Component: Profile
        }
    ]
}])