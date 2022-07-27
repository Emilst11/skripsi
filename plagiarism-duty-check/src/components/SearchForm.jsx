import React from "react";

const SearchForm = () =>{
    return(
        <div className="flex gap-5 grow">
            <input type="search" className="w-2/4 text-[#ffff] bg-[#191919] border border-[#535353] flex rounded-xl p-3" placeholder="Search File Here"/>
            <button className="bg-[#F8AC66] rounded-xl w-1/6">Find</button>
        </div>
    )
}

export default SearchForm