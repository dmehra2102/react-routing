import { createContext, useState } from "react";


export const  AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const handleauth = (state)=>{
        setIsAuth(state);
    }
    return <AuthContext.Provider  value={{isAuth,handleauth}}>{children}</AuthContext.Provider>
}