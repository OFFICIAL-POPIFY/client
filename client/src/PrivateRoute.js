import React from "react";
import {  Navigate } from "react-router-dom";
import LayoutBox from "../src/ui/Layout";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import InnerLayout from "./ui/InnnerLayout";
import Top from "./components/header/Top";
import Mypage from "./pages/Mypage";
import NavBar from "./components/header/NavBar";
import { Outlet } from "react-router-dom";
function PrivateRoute({ component: Component, ...rest }) {
   const token = localStorage.getItem('accessToken');

   if (token && (Component === LoginPage || Component === SignupPage)) {
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
        <Mypage />
        <Outlet />
      </InnerLayout>
    </LayoutBox>
  );
}

export default PrivateRoute;
