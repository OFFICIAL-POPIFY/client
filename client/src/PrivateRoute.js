import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
function PrivateRoute({component:Component, ...rest}) {
    const token = localStorage.getItem('accessToken');
    if (!token && (Component === LoginPage || Component === SignupPage)) {
      return <Component {...rest} />;
    }
  
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    return <Component {...rest} />;
  }
  
  //   if (token) {
  //     return component;
  //   }

  //   let target = "";

  //   switch(component) {
  //     case <Outlet/> : 
  //       target = "/login";
  //       break;
  //       case <LoginPage/> : 
  //       case <SignupPage/> : 
  //       target = "/";
  //       break;
  //   }
  //  if(!token){
  //   return component;
  //  }
   
  //   return <Navigate to={target} />;


export default PrivateRoute;
