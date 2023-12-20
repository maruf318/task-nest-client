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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
