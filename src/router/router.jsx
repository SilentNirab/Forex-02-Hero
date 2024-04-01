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
import AdminRoute from "./AdminRoute";
import ClientRoute from "./ClientRoute";
import PrivateRoute from "./PriveteRoute";
import BrakingNews from "../Pages/Dashboard/BreakingNews/BreakingNews";
import AllNews from "../Pages/Dashboard/AllNews/AllNews";
import Analysis from "../Pages/Analysis/Analysis";

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
    path: "analysis",
    element: <Analysis></Analysis>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dashboard/",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addpost",
        element: (
          <AdminRoute>
            <AddPost></AddPost>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allposts",
        element: (
          <AdminRoute>
            <AllPots></AllPots>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addnews",
        element: (
          <AdminRoute>
            <BrakingNews></BrakingNews>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allnews",
        element: (
          <AdminRoute>
            <AllNews></AllNews>
          </AdminRoute>
        ),
      },
    ],
  },
]);
