import React from "react";
import axios from 'axios';
import ListItems from "./ListItems";

class FormUpload extends React.Component{
    state = {
        records: [],
        selectedFile: {}
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", this.state.selectedFile);
        console.log(formData)
        try {
        axios.post('http://127.0.0.1:5000/api/uploader', formData)
        .then(res => {
            const data = res.data
            this.setState({records: data})
        });
        }
        catch(error) {
            console.log(error)
        }
    }

    handleFileSelect = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        },() => {
            console.log(this.state.selectedFile)
        })
    }
    render(){
        const { records, selectedFile } = this.state
        return(
            <div className="w-1/2 min-w-[800px] mx-auto py-10">
                <div className="border-b-2 border-[#535353] pb-5">
                    <h1 className="mb-5">Upload File Project</h1>
                    <form className="w-full" onSubmit={this.handleSubmit}>
                        <input type="file" hidden id="formUpload" name="file" onChange={this.handleFileSelect}/>
                        <div className={box}>
                            <label htmlFor="formUpload" className="w-full h-full flex justify-center items-center">Click Here in Choose ZIP file</label>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <h2 id="namefiles">{selectedFile.name}</h2>
                            <button className="w-1/4 bg-[#2FC58D] py-3 rounded-xl" type="submit">Upload Files</button>
                        </div>
                    </form>
                </div>
                <ListItems data={records}/>
                <div className="absolute left-10 top-[100px]">
                    <div className="flex gap-5 items-center my-5">
                        <div className="rounded-full bg-[#2FC58D] w-[15px] h-[15px]"></div>
                        <div>Plagiasi Ringan. (Dibawah 30%)</div>
                    </div>
                    <div className="flex gap-5 items-center my-5">
                        <div className="rounded-full bg-[#F7C934] w-[15px] h-[15px]"></div>
                        <div>Plagiasi Sedang. (30% sampai 70%)</div>
                    </div>
                    <div className="flex gap-5 items-center my-5">
                        <div className="rounded-full bg-[#F05E70] w-[15px] h-[15px]"></div>
                        <div>Plagiasi Berat. (Lebih 70%)</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormUpload

const box = "text-[#535353] w-full h-[20vh] bg-[#191919] border border-[#535353] flex rounded-xl"