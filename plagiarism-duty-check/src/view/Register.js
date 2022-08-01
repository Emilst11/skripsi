import React, {useState} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/login.css"
import axios from "axios";

const UPLOAD_URL = "http://127.0.0.1:8000/api/auth/register"

const Register = () => {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const [vpwd, setVpwd] = useState('')
    const [email, setEmail] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: pwd,
            c_password: vpwd
        }
        try{
            axios.post(UPLOAD_URL, data)
            .then(res => {
                console.log(res)
                window.location.href = "/";
            })
        }catch (error){
            console.error(error.response.data)
        }
        console.log(data)
    }

    return(
        <div className="login">
            <div className="bg-[#191919] absolute right-20 top-1/2 -translate-y-1/2 w-1/5 p-7 shadow-xl h-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="mb-5 tag">Register</h1>
                    <form onSubmit={handleSumbit}>
                        <div className="mb-5">
                            <label className="block">Username</label>
                            <input type="text" name="name" placeholder="Username" className={formQuis} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                            <label className="block">Email</label>
                            <input type="text" name="email" placeholder="Type Your E-mail" className={formQuis} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                            <label className="block">Password</label>
                            <input type="password" name="password" placeholder="Type password correctly" className={formQuis} onChange={(e) => setPwd(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                            <label className="block">Verify Password</label>
                            <input type="password" name="c_password" placeholder="Type your password again" className={formQuis} onChange={(e) => setVpwd(e.target.value)}/>
                        </div>
                        <div className="mb-5 flex justify-between items-center">
                            <p></p>
                            <button type="submit" className="w-1/2 bg-[#2FC58D] py-3 rounded-xl">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="py-5 text-center">
                    <p>
                        Apabila anda memiliki sudah memiliki akun? 
                        <Link to={'/'} className="font-bold"> Login Disini</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register

const formQuis = "text-[#ffffff] w-full bg-[#232323] flex rounded-xl p-5 block my-3"