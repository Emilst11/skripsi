import React from "react";

class ListItems extends React.Component{
    state = {
        datas: [
            {
                id : 1,
                name: "Laporan_magang_emil_setiawan.docx",
                similar: "Laporan_magang_irvan_arifudin.docx",
                presentation: "50"
            },
            {
                id : 2,
                name: "Laporan_magang_emil_setiawan.docx",
                similar: "Laporan_magang_irvan_arifudin.docx",
                presentation: "50"
            },
            {
                id : 3,
                name: "Laporan_magang_emil_setiawan.docx",
                similar: "Laporan_magang_irvan_arifudin.docx",
                presentation: "50"
            }
        ]
    }
    render(){
        const {datas} = this.state
        return(
            <div className="w-1/2 min-w-[800px] m-auto py-5">
                <h1>List files</h1>
                <div className="flex gap-5 mb-5">
                    <input type="search" className="w-2/4 text-[#ffff] bg-[#191919] border border-[#535353] flex rounded-xl p-3" placeholder="Search File Here"/>
                    <button className="bg-[#F8AC66] rounded-xl w-1/6">Find</button>
                </div>
                <div>
                    {datas.map(item => 
                        <div className="w-full flex mb-5 justify-between py-5 px-10 bg-[#232323] rounded-xl border-l-4 border-[#E33564]" key={item.id}>
                        <h2 className="self-center">{item.name}</h2>
                        <div>
                            <h3 className="text-[#909090]">Memiliki Kemiripan dengan berkas</h3>
                            <h3>{item.similar}</h3>
                        </div>
                        <div>
                            <h3 className="text-[#909090]">Presentase</h3>
                            <h3>{item.presentation}<span>%</span></h3>
                        </div>
                        <button className="text-[#E33564]">Delete</button>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default ListItems