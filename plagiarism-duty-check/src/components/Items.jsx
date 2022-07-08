import React from "react";

const Items = (props) => {
    return(
        <div className="w-full flex mb-5 justify-between py-5 px-10 bg-[#232323] rounded-xl border-l-4 border-[#E33564]">
            <h2 className="self-center">{props.data.name}</h2>
            <div>
                <h3 className="text-[#909090]">Memiliki Kemiripan dengan berkas</h3>
                <h3>{props.data.similar}</h3>
            </div>
            <div>
                <h3 className="text-[#909090]">Presentase</h3>
                <h3>{props.data.presentation}<span>%</span></h3>
            </div>
            <button className="text-[#E33564]">Delete</button>
        </div>
    )
}

export default Items