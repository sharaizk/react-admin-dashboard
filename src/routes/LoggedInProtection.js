import React from "react";
import { getToken } from "store/localstorage";
import { Navigate } from "react-router-dom";
const LoggedInProtection = ({ children, redirectTo }) => {
  let isAuthenticated = getToken();
  return isAuthenticated ? children : <Navigate to={redirectTo} />  ;
};

export default LoggedInProtection;
