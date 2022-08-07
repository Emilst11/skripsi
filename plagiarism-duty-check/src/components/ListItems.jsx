import React from "react";
import Items from "./Items";

const ListItems = ({data}) => {
    const comp = () =>{
        if(data.length === 0){
            return(
                <div className="text-[#535353] w-full border border-[#535353] flex rounded-xl border-dashed p-5 justify-center">No Items</div>
            )
        }else{
            return(
                data.reverse().map(item =>
                    <Items
                    key ={item.id}
                    record={item}
                    />
                    )
            )
        }
    }
    return(
        <div className="w-full min-w-[800px] m-auto py-5">
            <div>
                {comp()}
            </div>
        </div>
    )
}

export default ListItems