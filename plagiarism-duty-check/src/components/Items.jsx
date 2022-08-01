import React, { useState } from "react";


const Items = (props) => {
    const [open, setOpen] = useState(true)
    return(
        <div className="mb-5">
            <div className="w-full flex justify-between mb-5 py-5 px-10 bg-[#232323] rounded-xl border-l-4 border-[#E33564] cursor-pointer" onClick={() => setOpen(!open)}>
                <h2 className="max-w-[200px] self-center break-words">{props.record.name_file}</h2>
                <div>
                    <h3 className="text-[#909090]">Memiliki Kemiripan dengan berkas</h3>
                    <h3 className="max-w-[200px] break-words">{props.record.data[0].name_file}</h3>
                </div>
                <div>
                    <h3 className="text-[#909090]">Presentase</h3>
                    <h3>{props.record.data[0].precentage}<span>%</span></h3>
                </div>
                <button className="text-[#E33564]">Delete</button>
            </div>
            <div className={`${open ? "hidden" : "block"} w-[90%] m-auto border-x-2 border-dashed border-[#535353] px-5`}>
                <h2 className="mb-3 text-[#535353]">File yang dikomparasikan</h2>
                    {props.record.data.map(item => 
                        <div className="flex gap-5 h-[80px] bg-[#232323] items-center px-5 mb-3 rounded-xl">
                            <div className={`rounded-full ${parseFloat(item.precentage) < 30 ? "bg-[#2FC58D]" : parseFloat(item.precentage) < 70 ? "bg-[#F7C934]" : " bg-[#F05E70]"} w-[10px] h-[10px]`}></div>
                            <p className="grow">{item.name_file}</p>
                            <p className="gorw"><span className="text-[#535353]">Presentase :</span>{item.precentage}</p>
                        </div>
                        )}
            </div>
        </div>
    )
}

export default Items