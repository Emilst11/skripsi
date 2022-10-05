import React, { useState, useEffect } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../store/actions/logs";
import '../styles/Sidebar.scss'

const Sidebar = ( { data } ) => {
    const [admin, setAdmin] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()

    const sidebarContent = [    
        {
            id: 1,
            title: 'Home',
            link: '/home'
        },
        {
            id: 2,
            title: 'User',
            link: '/users',
        },
        {
            id: 3,
            title: 'About',
            link: '/about',
        }
    ]

    // const sidebarUser = sidebarContent.splice(1, 1)
    const logout = () => {
        dispatch(logoutUser())
    }
    if(admin === false){
        sidebarContent.splice(1, 1)
    }
    useEffect(() => {
        if(data?.role === 'administrator'){
            setAdmin(true)
        }
    }, [data])
    return(
        <div className="sidebar">
            <div className="sidebar-item">
                {
                   sidebarContent.map((item, i) => 
                   <Link 
                   key={i} className={`${location.pathname === item.link ? 'active' : ''} items`}
                   to={item.link}>
                       {item.title}
                   </Link>
                   )
                }
            </div>
            <button className="logout" onClick={logout}>
                <MdOutlineLogout/>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Sidebar