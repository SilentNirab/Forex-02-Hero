import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import Dashboard from "../layouts/Dashboard/Dashboard";
import Blogs from "../Pages/Blog/Blogs";
import AboutUs from "../Pages/AboutUs/AboutUs";
<<<<<<< HEAD
// import AllUsers from "../Pages/Dashboard/AllUser/Alluser";
// import AddPost from "../Pages/Dashboard/AddPost/AddPost";
=======
import AllUsers from "../Pages/Dashboard/AllUser/Alluser";
import AddPost from "../Pages/Dashboard/AddPost/AddPost";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
>>>>>>> b42e0a5c643c750919a7107385ba7c62f7da5d9a

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
<<<<<<< HEAD
  // {
  //   path: "/dashboard",
  //   element: <Dashboard></Dashboard>,
  //   errorElement: <Errorpage></Errorpage>,
  //   children: [
  //     // {
  //     //   path: '/dashboard',
  //     //   element:<AllUsers></AllUsers>
  //     // },
  //     {
  //       path: "/dashboard/addpost",
  //       element: <AddPost></AddPost>
  //     }
  // ],
  // },
=======
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dashboard/",
        element: <AdminProfile></AdminProfile>
      },
      {
        path: '/dashboard/allusers',
        element:<AllUsers></AllUsers>
      },
      {
        path: "/dashboard/addpost",
        element: <AddPost></AddPost>
      }
  ],
  },
>>>>>>> b42e0a5c643c750919a7107385ba7c62f7da5d9a
]);
