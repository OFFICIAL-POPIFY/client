import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import LayoutBox from "../src/ui/Layout";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import InnerLayout from "./ui/InnnerLayout";
import Top from "./components/Top";
import NavBar from "./components/NavBar";

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('accessToken');

  if (!token && (Component === LoginPage || Component === SignupPage)) {
    return <Component {...rest} />;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <LayoutBox>
      <InnerLayout>
        <Top />
        <NavBar />
        <Outlet />
      </InnerLayout>
    </LayoutBox>
  );
}

export default PrivateRoute;
