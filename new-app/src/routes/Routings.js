import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../views/Home";
import Users from "../views/Users";
import About from "../views/About";
import LoginRegist from "../views/LoginRegist";
import PrivateRoutes from "./PrivateRoutes";

const Routings = () => {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<LoginRegist/>} />
                <Route path="/home" element={
                    <PrivateRoutes>
                        <Home/>
                    </PrivateRoutes>
                } />
                <Route path="/about" element={
                    <PrivateRoutes>
                        <About/>
                    </PrivateRoutes>
                } />
                <Route path="/users" element={
                    <PrivateRoutes>
                        <Users/>
                    </PrivateRoutes>
                } />
            </Routes>
        </React.Fragment>
    )
}

export default Routings