import React from "react";
import {FiUser} from 'react-icons/fi'
import '../styles/Navbar.scss'

const Navbar = ( { data, active } ) => {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <h1 className="logo">TEXTPLAG</h1>
                { active && 
                    <form className="search">
                        <input type="text" placeholder="Search file here" className="search-box"/>
                        <button>Find</button>
                    </form>
                }
                {
                    active ? (
                        <div className="users">
                            <p>{data?.name}</p>
                            <div className="users-profile">
                                <FiUser/>
                            </div>
                        </div>
                    ) : (
                        <h2>Welcome to Textplag</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar