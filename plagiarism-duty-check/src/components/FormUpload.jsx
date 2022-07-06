import React from "react";


function changing (e){
    let result = document.getElementById("namefiles")
    result.innerHTML = e.target.value
}

const FormUpload = () =>{
    return(
        <div className="w-1/2 min-w-[800px] mx-auto py-10 border-b-2 border-[#535353]">
            <h1 className="mb-5">Upload File Project</h1>
            <form action="http://127.0.0.1:5000/api/uploader" method="POST" encType="multipart/form-data" className="w-full">
                <input type="file" hidden id="formUpload" name="file" onChange={changing}/>
                <div className={box}>
                    <label htmlFor="formUpload" className="w-full h-full flex justify-center items-center">Click Here in Choose ZIP file</label>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <h2 id="namefiles">Pilih file</h2>
                    <button className="w-1/4 bg-[#2FC58D] py-3 rounded-xl">Upload Files</button>
                </div>
            </form>
        </div>
    )
}

export default FormUpload

const box = "text-[#535353] w-full h-[20vh] bg-[#191919] border border-[#535353] flex rounded-xl"