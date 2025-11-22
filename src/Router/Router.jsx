import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Profile from "../Pages/Profile/Profile";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Loader from "../Components/Loader/Loader";
import UpdateProfile from "../Components/UppdateProfile/UpdateProfile";
import EditService from "../Components/EditService/EditService";

export const router = createBrowserRouter([{
    path: '/',
    Component: Layout,
    errorElement: <ErrorPage></ErrorPage>,
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
            path: '/services/:id',
            element: <PrivateRoute>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5030/services/${params.id}`),
            hydrateFallbackElement: <Loader></Loader>
        },
        {
            path: '/myservices',
            element: <PrivateRoute>
                <MyServices></MyServices>
            </PrivateRoute>
        },
        {
            path: '/editMyService/:id',
            element: <PrivateRoute>
                <EditService></EditService>
            </PrivateRoute>
        },
        {
            path: '/addservices',
            element: <PrivateRoute>
                <AddServices></AddServices>
            </PrivateRoute>
        },
        {
            path: '/mybookings',
            element: <PrivateRoute>
                <MyBookings></MyBookings>
            </PrivateRoute>
        },
        {
            path: '/profile',
            element: <PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>
        },
        {
            path: '/updateProfile',
            element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        }
    ]
}])