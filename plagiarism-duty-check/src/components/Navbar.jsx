import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = ( { data } ) => {
    const [logout, setLogout] = useState(true)
    const navbars = [
        {
            nav: "Workspace",
            action: "/home"
        },
        {
            nav: "About",
            action: "/home"
        },
        {
            nav: "Help",
            action: "/home"
        },
        {
            nav: "User",
            action: "/user"
        }
    ]

    const logoutBtn = () => {
        sessionStorage.clear()
    }
    
    const role = (items) =>{
        if(!items){
            return <div></div>
        }else{
            if(items.role === "administrator"){
                return(
                    navbars.map(item => 
                        <Link to={item.action}>{item.nav}</Link>)
                )
            }else if(items.role === "user"){
                navbars.pop()
                return(
                    navbars.map(item => 
                        <Link to={item.action}>{item.nav}</Link>)
                )
            }
        }
    }

    const userProfile = (user) => {
        if(!user){
            return(
                <div className="flex gap-3">
                    <div className={circle + " bg-[#F05E70]"}></div>
                    <div className={circle + " bg-[#F7C934]"}></div>
                    <div className={circle + " bg-[#2FC58D]"}></div>
                </div>
            )
        }else{
            return (
                <div className="flex gap-5 items-center">
                    <p>{user.name}</p>
                    <div className={circle + " bg-[#FFF] cursor-pointer"} onClick={() => setLogout(!logout)}>
                        <div className={`${logout ? "hidden" : "block"} absolute w-[100px] top-[50px] right-[20px] bg-[#232323] p-5 text-center`}>
                            <Link to={`/`} onClick={logoutBtn}>Logout</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return(
        <div className={navbar}>
            <h1 className="logo">TextPlag</h1>
            <div className="flex gap-5">{role(data)}</div>
            {userProfile(data)}
        </div>
    )
}

export default Navbar;

const navbar = "navbar flex justify-between items-center px-10 py-5"
const circle = "w-8 h-8 rounded-full"