import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Blogs from "../Pages/Blog/Blogs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllUsers from "../Pages/Dashboard/AllUser/Alluser";
import AddPost from "../Pages/Dashboard/AddPost/AddPost";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import AllPots from "../Pages/Dashboard/AllPosts/AllPosts";
import PrivateRoute from "./PriveteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dashboard/",
        element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
      },
      {
        path: '/dashboard/allusers',
        element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path: "/dashboard/addpost",
        element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
      },
      {
        path: "/dashboard/allposts",
        element: <PrivateRoute><AllPots></AllPots></PrivateRoute>
      }
  ],
  },
]);
