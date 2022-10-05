import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { userProfile } from "../store/actions/profile";
import '../styles/Mainlayout.scss'

const MainLayout = props => {
    const dispatch = useDispatch()
    const { isActive, data } = useSelector(state => state.profile)
    useEffect(() => {
        dispatch(userProfile())
    }, [])
    return(
        <React.Fragment>
            <Navbar data={data} active={isActive}/>
            <div className="home">
                <Sidebar data={data}/>
                <div className="main">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainLayout