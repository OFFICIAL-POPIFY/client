import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
function PrivateRoute({component:component, ...rest}) {
    const token = localStorage.getItem('accessToken');
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  );
}

export default PrivateRoute;
