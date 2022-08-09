import axios from "axios";
import React, {useEffect, useState} from "react";
import SearchForm from "../components/SearchForm";

const UserList = () => {
    const [user, setUser] = useState()
    const url_api = "http://127.0.0.1:8000/api/auth/list-user?token="

    let token_auth = sessionStorage.getItem('token')
    useEffect(() => {
        axios.get(url_api + token_auth)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [token_auth])

    const listUser = () =>{
        if (user === undefined) {
            return(
                <div className="text-[#535353] w-full border border-[#535353] flex rounded-xl border-dashed p-5 justify-center">No Items</div>
            )
        }else{
            return(
                <div className="w-1/2 min-w-[800px] mx-auto py-10">
                    {
                        user.data?.map(item => 
                            <div key={item.id} className="w-full flex justify-between mb-5 py-5 px-10 bg-[#232323] rounded-xl border-l-4 border-[#E33564] cursor-pointer items-center">
                            <h2>{item.name}</h2>
                            <h2>{item.role}</h2>
                            <div className="flex gap-5 items-center">Status <div className={`rounded-full ${parseFloat(item.is_active) < 1 ? "bg-[#F05E70]": "bg-[#2FC58D]"} w-[10px] h-[10px]`}></div></div>
                            <h2>{item.email}</h2>
                            <div className="flex gap-5">
                                <button className="py-2 px-5 bg-[#2FC58D]">Aktif</button>
                                <button className="py-2 px-5 bg-[#E33564]">Non Aktif</button>
                            </div>
                            <button className="text-[#E33564]">Delete</button>
                        </div>)
                    }
                </div>
            )
        }
    }

    return(
        <div>
            <div className="w-1/2 min-w-[800px] mx-auto py-10">
                <h1 className="mb-5">List Users</h1>
                <SearchForm/>
            </div>
            {/* <div className="w-1/2 min-w-[800px] mx-auto py-10">
                {items}
            </div> */}
            {listUser()}
        </div>
    )
}
export default UserList