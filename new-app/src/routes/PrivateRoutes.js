import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ( {children} ) => {
    const {isAuth} = useSelector(state => state.logs)
    if(!isAuth){
        return <Navigate to='/' replace/>
    }
    return children
}

export default PrivateRoutes