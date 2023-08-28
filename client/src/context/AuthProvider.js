import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
    const value = {
      auth,
      setAuth,
  };

  console.log("userid: ", auth.user_id);
  console.log("password: ", auth.password);
  console.log("accessToken: ", auth.accsessToken);
  console.log("roles: ", auth.roles);
  console.log("id: ", auth.id);
    return (
      <AuthContext.Provider value={{ auth, setAuth, value }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export function useAuth() {
    return useContext(AuthContext);
  }
  
  
export default AuthContext;
