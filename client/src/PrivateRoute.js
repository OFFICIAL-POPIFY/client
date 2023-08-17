import React from "react";
import {  Navigate } from "react-router-dom";
import LayoutBox from "../src/ui/Layout";
import InnerLayout from "./ui/InnnerLayout";
import Top from "./components/header/Top";

import NavBar from "./components/header/NavBar";
import { Outlet } from "react-router-dom";
function PrivateRoute({ element: Element }) {
  const token = localStorage.getItem('accessToken');

  if (!token) {

    return (
      <LayoutBox>
        <InnerLayout>
          <Top />
          <NavBar />
          <Element />

          <Outlet />
        </InnerLayout>
      </LayoutBox>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
