import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import AddToys from "../Pages/AddToys/AddToys";
import Blog from "../Pages/Blogs/Blog";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import DetailsToy from "../Pages/AllToys/DetailsToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/addtoys",
        element: <PrivateRoute><AddToys /></PrivateRoute>,
      },
      {
        path : "/alltoys",
        element : <PrivateRoute><AllToys /></PrivateRoute>, //?? eta private
        loader : () => fetch('http://localhost:5000/all-toys')
      },
      {
        path : "/detailstoy/:id",
        element : <PrivateRoute><DetailsToy/></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/all-toys/${params.id}`)
      },
      {
        path : '/mytoys',
        element : <MyToys/>
      },
      {
        path : "/blogs",
        element : <Blog/>
      }
    ],
  },
]);

export default router;
