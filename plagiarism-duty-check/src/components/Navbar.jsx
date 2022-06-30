import React from "react";
import "../styles/navbar.css"

const Navbar = () => {
    return(
        <div className={navbar}>
            <h1 className="logo">TextPlag</h1>
            <div className="flex gap-5">
                <a href="">Workspace</a>
                <a href="">About</a>
                <a href="">Help</a>
            </div>
            <div className="flex gap-3">
                <div className={circle + " bg-[#F05E70]"}></div>
                <div className={circle + " bg-[#F7C934]"}></div>
                <div className={circle + " bg-[#2FC58D]"}></div>
            </div>
        </div>
    )
}

export default Navbar;

const navbar = "navbar flex justify-between items-center px-10 py-5"
const circle = "w-5 h-5 rounded-full"