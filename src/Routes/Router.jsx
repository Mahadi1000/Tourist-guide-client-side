import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import OurPackeges from "../Pages/OurPackeges/OurPackeges";
import Main from "../Pages/Layout/Main";
import PackegeDetails from "../Pages/OurPackeges/PackegeDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyBookings from "../Pages/Dashboard/MyBooking/MyBookings";
import AddPackage from "../Pages/Dashboard/AddPackage/AddPackage";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Blogs></Blogs>,
      },
      {
        path: "/ourPackages",
        element: <OurPackeges></OurPackeges>,
      },
      {
        path: "/packegeDetails/:place",
        element: (
          <PrivateRoute>
            <PackegeDetails></PackegeDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // for users
      {
        path: "my-booking",
        element: <MyBookings></MyBookings>,
      },
      // for admins
      {
        path: "add-package",
        element: <AddPackage></AddPackage>,
      },
      {
        path: "manage-item",
        element: <ManageItem></ManageItem>,
      },
    ],
  },
]);
