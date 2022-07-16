import React from "react";
import Items from "./Items";

const ListItems = ({data}) => {
    const comp = () =>{
        if(data.length === 0){
            return(
                <h2>No item list</h2>
            )
        }else{
            return(
                data.record.map(item =>
                    <Items
                    key ={item.iteration}
                    data={item}
                    />
                    )
            )
        }
    }
    return(
        <div className="w-full min-w-[800px] m-auto py-5">
            <h1>List files</h1>
            <div className="flex gap-5 mb-5">
                <input type="search" className="w-2/4 text-[#ffff] bg-[#191919] border border-[#535353] flex rounded-xl p-3" placeholder="Search File Here"/>
                <button className="bg-[#F8AC66] rounded-xl w-1/6">Find</button>
            </div>
            <div>
                {comp()}
            </div>
        </div>
    )
}

export default ListItems