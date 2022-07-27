import React from "react";
import Navbar from "../components/Navbar";
import "../styles/login.css"

const Register = () => {
    return(
        <div className="login">
            <Navbar/>
            <div className="bg-[#191919] absolute right-20 top-1/2 -translate-y-1/2 w-1/5 p-7 shadow-xl h-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="mb-5 tag">Register</h1>
                    <form>
                        <div className="mb-5">
                            <label className="block">Username</label>
                            <input type="text" name="username" placeholder="Username" className={formQuis}/>
                        </div>
                        <div className="mb-5">
                            <label className="block">Password</label>
                            <input type="password" name="password" placeholder="Type password correctly" className={formQuis}/>
                        </div>
                        <div className="mb-5">
                            <label className="block">Verify Password</label>
                            <input type="password" name="password" placeholder="Type your password again" className={formQuis}/>
                        </div>
                        <div className="mb-5 flex justify-between items-center">
                            <p>Error Message</p>
                            <button type="submit" className="w-1/2 bg-[#2FC58D] py-3 rounded-xl">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="py-5 text-center">
                    <p>Apabila anda memiliki sudah memiliki akun? <a href="#" className="font-bold">Login Disini</a></p>
                </div>
            </div>
        </div>
    )
}

export default Register

const formQuis = "text-[#535353] w-full bg-[#232323] flex rounded-xl p-5 block my-3"