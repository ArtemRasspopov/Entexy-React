import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authStatus = localStorage.getItem("authStatus");

  if (authStatus === "authorized") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
