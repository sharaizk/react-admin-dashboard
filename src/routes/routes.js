import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Importing Pages
import AuthScreen from "pages/AuthScreen";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "login",
          element: <AuthScreen />,
        },
        {
          path: "404",
          element: <NotFound />,
        },
        {
          path: "*",
          element: <Navigate to="/404" />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
