import React from "react";
import axios from 'axios';
import ListItems from "./ListItems";
import SearchForm from "./SearchForm";

class FormUpload extends React.Component{
    state = {
        records: [],
        selectedFile: {},
        periode: "",
        years: "",
        open: true
    }
    handleSubmit = (event) => {
        let token_auth = sessionStorage.getItem("token")
        event.preventDefault()
        this.setState({
            open: true
        })
        const formData = new FormData();
        formData.append('period', this.state.periode);
        formData.append('year', this.state.years);
        formData.append("file", this.state.selectedFile);
        console.log(formData)
        try {
        axios.post('http://127.0.0.1:5000/api/uploader', formData)
        .then(res => {
            const data = res.data
            const dbStore = {
                period: this.state.periode,
                year: this.state.years,
                store_data: res.data
            }
            console.log(JSON.stringify(dbStore))
            try{
                axios.post('http://127.0.0.1:8000/api/auth/record/store?token='+token_auth, dbStore)
                .then(console.log("Berhasil"))
            } catch (error) {
                console.log(error)
            }
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

    loadPage = () =>{
        let token_auth = sessionStorage.getItem("token")
        try{
            axios.get('http://127.0.0.1:8000/api/auth/record/get-all?token=' + token_auth)
            .then(res => {
                this.setState({records : res.data})
                console.log(this.state.records)
            })
        }catch (error){
            console.error(error.message)
        }
    }

    componentDidMount() {
        let token_auth = sessionStorage.getItem("token")
        try{
            axios.get('http://127.0.0.1:8000/api/auth/record/get-all?token=' + token_auth)
            .then(res => {
                this.setState({records : res.data})
                console.log(this.state.records)
            })
        }catch (error){
            console.error(error.message)
        }
      }

    render(){
        const { records, selectedFile, open, periode, years } = this.state
        return(
            <div className="w-1/2 min-w-[800px] mx-auto py-10">
                <div className="border-[#535353] pb-5">
                    <h1 className="mb-5">List Files</h1>
                    <div className="flex justify-between">
                        <SearchForm/>
                        <button className="w-1/4 bg-[#2FC58D] rounded-xl" onClick={() => this.setState({open: false})}>Upload Form</button>
                    </div>
                    <div className={`${open ? "hidden" : "absolute"} + ${formContainer}`}>
                        <div className="flex justify-between mb-5">
                            <h1>Add New Folder</h1>
                            <button onClick={() => this.setState({open: true})}>X</button>
                        </div>
                        <form className="w-full" onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="periode" className="block mb-3">Periode</label>
                                <select name="periode" id="periode" className={formQuis} onChange={(e) => this.setState({periode: e.target.value})}>
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="ganjil">Ganjil</option>
                                    <option value="genap">Genap</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tahun" className="block mb-3">Tahun</label>
                                <input type="text" className={formQuis} placeholder="Tahun" onChange={(e) => this.setState({years: e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formUpload" className="block mb-3">Upload Folder</label>
                                <input type="file" hidden id="formUpload" name="file" onChange={this.handleFileSelect}/>
                                <div className={box}>
                                    <label htmlFor="formUpload" className="w-full h-full flex justify-center items-center">Click Here in Choose ZIP file</label>
                                </div>
                            </div>
                            <h2 className="mb-3">{selectedFile.name}</h2>
                            <button className="w-full bg-[#2FC58D] py-3 rounded-xl" type="submit">Upload Files</button>
                        </form>
                    </div>
                </div>
                <ListItems data={records}/>
            </div>
        )
    }
}

export default FormUpload

const formContainer = "w-1/5 bg-[#232323] px-5 py-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl"
const formQuis = "text-[#ffffff] w-full bg-[#232323] border border-[#535353] flex rounded-xl p-3 block"
const box = "text-[#535353] w-full h-[20vh] border border-[#535353] flex rounded-xl border-dashed"