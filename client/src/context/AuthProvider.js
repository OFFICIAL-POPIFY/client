// context/AuthProvider.js
import  React,{ createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
 console.log("userid: ", auth.user_id);
  console.log("password: ", auth.password);
  console.log("accessToken: ", auth.accsessToken);
  console.log("roles: ", auth.roles);
  console.log("id: ", auth.id);
  useEffect(() => {
    //로그인이 되면 다시 로그인 하지 않도록
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuth(JSON.parse(auth));  
    }

  }, []);

  const value = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={{ auth, setAuth, value }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
