import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import EmptyList from "../components/EmptyList";
import RecordList from "../components/RecordList";
import MainLayout from "../layouts/MainLayout";
import { getRecord, uploadPy, uploadDb } from "../store/actions/record";
import "../styles/Home.scss"

const Home = () => {
    const [pop, setPop] = useState(false)
    const [periods, setPeriods] = useState('')
    const [date, setDate] = useState('')
    const [file, setFile] = useState([])
    const [max, setMax] = useState(0)
    const [medium, setMedium] = useState(0)
    const [light, setLight] = useState(0)
    const dispatch = useDispatch()
    const { datas } = useSelector(state => state.records)
    const data = new FormData()

    const countingMax = (rec) => {
        let hard = 0
        let mid = 0
        let small = 0
        rec.map(i => i?.data.map(y => y?.precentage > 20 ? hard++ : y?.precentage > 15 ? mid++ : small++))
        setMax(hard)
        setMedium(mid)
        setLight(small)
    }

    useEffect(() => {
        dispatch(getRecord())
        const interval = setTimeout(() => {
            countingMax(datas)
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    const handleSumbit = e => {
        e.preventDefault()
        const forms = {
            periods, date, file
        }
        data.append('file', file[0])
        dispatch(uploadPy(data))
        setPop(false)
        setFile([])
    }
    return(
        <MainLayout>
            <div className="container-banner">
                <Banner text='Total Record' number={datas.length}/>
                <Banner text='Hard Plagiarism' number={max}/>
                <Banner text='Middle Plagiarism' number={medium}/>
                <Banner text='Light Plagiarism' number={light}/>
            </div>
            <h1>List Files</h1>
            <div className="btn-group">
                <button className="sort">Sort by time</button>
                <button className="uploads" onClick={() => setPop(!pop)}>Upload Files</button>

            </div>
            {pop && 
                <div className="container">
                    <div className="container-popups">
                        <div className="title">
                            <h1>Add new folders</h1>
                            <button onClick={() => setPop(!pop)}>X</button>
                        </div>
                        <form onSubmit={handleSumbit}>
                            <div className="form-input">
                                <label htmlFor="periods">Periode</label>
                                <select name="period" id="periods" value={periods} onChange={(e) => setPeriods(e.target.value)}>
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="ganjil">Ganjil</option>
                                    <option value="genap">Genap</option>
                                </select>
                            </div>
                            <div className="form-input">
                                <label htmlFor="date">Tanggal upload</label>
                                <input type="text" id="date" name="year" value={date} onChange={(e) => setDate(e.target.value)}/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="upload">Upload folder</label>
                                <input type="file" id="upload" className="upload" value={file} name='file' onChange={(e) => setFile([e.target.value])}/>
                                <label htmlFor="upload" className="upload-box">Choose file here</label>
                            </div>
                            <p className="files">{file}</p>
                            <button className="submit">Submit</button>
                        </form>
                    </div>
                </div>
            }
            <div className="container-files">
                {
                    datas ? (
                        datas.map((item, index) => 
                            <RecordList key={index} data={item}/>
                        )
                    ) : <EmptyList/>
                }
            </div>
        </MainLayout>
    )
}

export default Home