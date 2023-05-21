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
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        title: "Home",
        element: <Home />,
      },
      {
        path: "/login",
        title: "login",
        element: <Login />,
      },
      {
        path: "/registration",
        title: "registration",
        element: <Registration />,
      },
      {
        path: "/addtoys",
        title: "addtoys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        title: "alltoys",
        element: (
          <PrivateRoute>
            <AllToys />
          </PrivateRoute>
        ),
        loader: () => fetch("https://toys-land-server-sandy.vercel.app/all-toys"),
      },
      {
        path: "/detailstoy/:id",
        title: "toy Details",
        element: (
          <PrivateRoute>
            <DetailsToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-land-server-sandy.vercel.app/all-toys/${params.id}`),
      },
      {
        path: "/mytoys",
        title: "mytoys",
        element: <MyToys />,
      },
      {
        path: "/updatetoy/:id",
        title: "updatetoy",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://toys-land-server-sandy.vercel.app/all-toys/${params.id}`),
      },
      {
        path: "/blogs",
        title: "blogs",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
