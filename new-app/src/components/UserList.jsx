import React from "react";
import '../styles/UserList.scss'

const UserList = ( { number, data } ) => {
    return(
        <div className="container-box">
            <div>{number+1}</div>
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.role}</div>
            <div className="active" style={ data.is_active === 1 ? green : red}></div>
        </div>
    )
}

export default UserList

const green = {
    background: '#2FC58D'
}

const red = {
    background: '#F05E70'
}