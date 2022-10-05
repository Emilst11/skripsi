import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Login.scss'
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registUser } from "../store/actions/logs";
import Loadings from "../components/Loadings";

const LoginRegist = () => {
    const dispatch = useDispatch()
    const { isAuth, isLoading, errors } = useSelector(state => state.logs)
    const navigate = useNavigate()
    const [regist, setRegist] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        const user = {
            email, password
        }
        dispatch(loginUser(user))
        setEmail('')
        setPassword('')
    }
    const registers = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            email: email,
            password: password,
            c_password: cpassword
        }
        dispatch(registUser(user))
        setName('')
        setCpassword('')
        setTimeout(() => {
            setRegist(!regist)
        }, 2000)
    }
    useEffect(() => {
        if(isAuth === true){
            navigate('/home')
        }
    },[isAuth])

    const formsChange = () => setRegist(!regist)
    return(
        <div>
            <Navbar/>
            <div className="main">
                <div className="greats">
                    <h1>TEXTPLAG</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nulla exercitationem a quis saepe repudiandae, non accusantium autem obcaecati deleniti unde, nostrum neque impedit quibusdam culpa porro natus. Placeat delectus nulla, pariatur dolorum tempora neque mollitia sint quisquam sequi consequatur.
                    </p>
                </div>
                <div className="forms">
                    <h1>{regist ? 'LOGIN' : 'REGISTER'}</h1>
                    <form onSubmit={regist ? login : registers}>
                        {!regist && 
                            <div className="input-box">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Jhon doe" id="username" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        }
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="email@email.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="*****" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {!regist &&
                            <div className="input-box">
                                <label htmlFor="cpassword">Type Your Password Again</label>
                                <input type="password" placeholder="*****" id="cpassword" value={cpassword} onChange={(e) => setCpassword(e.target.value)}/>
                            </div>
                        }
                        <div className="btn-group">
                            <div>
                                {errors && 
                                <p>{errors.error}</p>
                                }
                            </div>
                            <button>{regist ? 'Login' : 'Register'}</button>
                        </div>
                    </form>
                    <div className="notes">
                        <p>
                            {regist ? 'Anda tidak memiliki akun? ' : 'Anda sudah memiliki akun? '}
                            <span onClick={formsChange}>{regist ? 'Daftar disini' : 'Login Disini'}</span>
                        </p>
                    </div>
                </div>
            </div>
            {isLoading && <Loadings/>}
        </div>
    )
}

export default LoginRegist