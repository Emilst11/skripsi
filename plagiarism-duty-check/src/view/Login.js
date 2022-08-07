import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/auth/login"

const Login = () => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post(BASE_URL, {"email" : email, "password": pwd})
            .then(data => {
                console.log(JSON.stringify(data))
                if('access_token' in data['data']){
                    sessionStorage.setItem("token", data['data']['access_token'])
                }
                window.location.href = "/home";
            })
            .catch(err => {
                if(!err.message){
                    setErrMsg('No server response')
                    setTimeout(() => {
                        setErrMsg('')
                    }, 2000)
                }else{
                    setErrMsg('Missing E-mail or Password')
                    setTimeout(() => {
                        setErrMsg('')
                    }, 2000)
                }
                
            })
    }

    return(
        <div className="login">
            <div className="bg-[#191919] absolute right-20 top-1/2 -translate-y-1/2 w-1/5 p-7 shadow-xl h-1/3 flex flex-col justify-between">
                <div>
                    <h1 className="mb-5 tag">Login</h1>
                    <form onSubmit={handlesubmit}>
                        <div className="mb-5">
                            <label className="block">E-mail</label>
                            <input type="text"
                            name="email" 
                            placeholder="Your E-mail" 
                            className={formQuis}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </div>
                        <div className="mb-5">
                            <label className="block">Password</label>
                            <input type="password" 
                            name="password" 
                            placeholder="Type password correctly" 
                            className={formQuis}
                            onChange={(e) => setPwd(e.target.value)}
                            required/>
                        </div>
                        <div className="mb-5 flex justify-between items-center">
                            <p>{errMsg}</p>
                            <button type="submit" className="w-1/2 bg-[#2FC58D] py-3 rounded-xl">Login</button>
                        </div>
                    </form>
                </div>
                <div className="py-5 text-center">
                    <p>
                        Apakah Anda belum memiliki akun?
                        <Link to={'/register'}> Klik disini</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login

const formQuis = "text-[#ffffff] w-full bg-[#232323] flex rounded-xl p-5 block my-3"