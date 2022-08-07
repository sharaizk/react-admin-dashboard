import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Layout:
import DashboardLayout from "layouts/DashboardLayout";

// Importing Pages
import AuthScreen from "pages/AuthScreen";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";
import Analytics from "pages/Analytics";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/login" /> },
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
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="main" />,
        },
        {
          path: "main",
          element: <Dashboard />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
      ],
    },
    {
      path: "/*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
