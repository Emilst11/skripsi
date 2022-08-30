import React,  {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Login from "./view/Login"
import Register from "./view/Register"
import Home from "./view/Home"
import UserLists from "./view/UserLists"
import Navbar from "./components/Navbar"
import About from "./view/About"
import Help from "./view/Help"
import axios from "axios"

const URL_AUTH = "http://127.0.0.1:8000/api/auth/me?token="

const Router = () => {
    const [user, setUser] = useState()
    // const token_auth = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1OTMzOTM4MCwiZXhwIjoxNjU5MzQyOTgwLCJuYmYiOjE2NTkzMzkzODAsImp0aSI6ImFCVmFLWTNTVEtRMHQ2R3giLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.RViXyMrEkI3On408jFY_FxAKlh9ST8BRgKYuuit30Oo"

    useEffect(() => {
        let token_auth = sessionStorage.getItem("token")
        try{
            axios.post(URL_AUTH + token_auth)
            .then( res => {
                setUser(res.data)
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    },[])

    return(
        <div>
            <Navbar data={user}/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/user" element={<UserLists/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/help" element={<Help/>}/>
            </Routes>
        </div>
    )
}

export default Router