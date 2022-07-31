import React from "react";
import { getToken } from "redux/localstorage";
import { Navigate } from "react-router-dom";
const LoggedOutProtection = ({ children, redirectTo }) => {
  let isAuthenticated = getToken();
  return !isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default LoggedOutProtection;
