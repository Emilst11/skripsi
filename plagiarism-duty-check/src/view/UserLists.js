import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

const UserList = () => {
    const [user, setUser] = useState([
        {
            id: 1,
            name: "Emil Setiawan",
            role: "User",
            status: "Aktif"
        },
        {
            id: 2,
            name: "Admin",
            role: "Administrator",
            status: "Aktif"
        },
        {
            id: 3,
            name: "Jhon",
            role: "User",
            status: "Non Aktif"
        }
    ]
    )
    return(
        <div>
            <div className="w-1/2 min-w-[800px] mx-auto py-10">
                <h1 className="mb-5">List Users</h1>
                <SearchForm/>
            </div>
            <div className="w-1/2 min-w-[800px] mx-auto py-10">
                {
                    user.map(item => 
                        <div key={item.id} className="w-full flex justify-between mb-5 py-5 px-10 bg-[#232323] rounded-xl border-l-4 border-[#E33564] cursor-pointer items-center">
                            <h2>{item.name}</h2>
                            <h2>{item.role}</h2>
                            <h2>Status <span>{item.status}</span></h2>
                            <div className="flex gap-5">
                                <button className="py-2 px-5 bg-[#2FC58D]">Aktif</button>
                                <button className="py-2 px-5 bg-[#E33564]">Non Aktif</button>
                            </div>
                            <button className="text-[#E33564]">Delete</button>
                        </div>)
                }
            </div>
        </div>
    )
}
export default UserList