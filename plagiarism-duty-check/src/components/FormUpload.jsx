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
            const records = res.data
            console.log(records)
            this.setState({records})
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
                            <h2 id="namefiles"></h2>
                            <button className="w-1/4 bg-[#2FC58D] py-3 rounded-xl" type="submit">Upload Files</button>
                        </div>
                    </form>
                </div>
                <ListItems/>
            </div>
        )
    }
}

export default FormUpload

const box = "text-[#535353] w-full h-[20vh] bg-[#191919] border border-[#535353] flex rounded-xl"