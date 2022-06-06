import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext'

function PrivateComponents({children}) {
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to={"/login"} replace={false}/>
    }
    else{
        return children
    }

}

export default PrivateComponents