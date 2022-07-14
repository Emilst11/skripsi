import React from "react";

const Items = (props) => {
    return(
        <div className="w-full flex justify-between mb-5 py-5 px-10 bg-[#232323] rounded-xl border-l-4 border-[#E33564]">
            <h2 className="max-w-[200px] self-center break-words">{props.data.data1}</h2>
            <div>
                <h3 className="text-[#909090]">Memiliki Kemiripan dengan berkas</h3>
                <h3 className="max-w-[200px] break-words">{props.data.data2}</h3>
            </div>
            <div>
                <h3 className="text-[#909090]">Presentase</h3>
                <h3>{props.data.precentage}<span>%</span></h3>
            </div>
            <button className="text-[#E33564]">Delete</button>
        </div>
    )
}

export default Items