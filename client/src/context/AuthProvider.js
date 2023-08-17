import { createContext, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const  [auth, setAuth] = useState({});
    const [userPassword, setUserPassword] = useState("");
    const value = {
        userPassword,
      };
    return (
        <AuthContext.Provider value={{ auth, setAuth ,value}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;