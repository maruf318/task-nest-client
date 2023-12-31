import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Main/Root";
import Banner from "./components/Banner";
import Faq from "./pages/Faq";
import Benefits from "./pages/Benefits";
import AuthProvider from "./providers/AuthProvider";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./components/CreateTask";
import MyTasks from "./components/MyTasks";
import DashboardProfile from "./components/DashboardProfile";
import PrivateRoute from "./routes/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTask from "./pages/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/benefits",
        element: <Benefits></Benefits>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "profile",
            element: <DashboardProfile></DashboardProfile>,
          },
          {
            path: "createTask",
            element: <CreateTask></CreateTask>,
          },
          {
            path: "myTasks",
            element: <MyTasks></MyTasks>,
          },
          {
            path: "task/:id",
            element: <UpdateTask></UpdateTask>,
            loader: ({ params }) =>
              fetch(
                `https://task-nest-server-one.vercel.app/task/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    <ToastContainer />
  </AuthProvider>
);
