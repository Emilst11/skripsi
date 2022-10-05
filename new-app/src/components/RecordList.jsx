import React, { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri'
import '../styles/RecordList.scss'

const RecordList = ( { data } ) => {
    const [open, setOpen] = useState(false)
    return(
        <div className="lists" onClick={() => setOpen(!open)}>
            <div className="lists-box">
                <h1>{data.name_file}</h1>
                <div>
                    <p>Tahun uploads</p>
                    <p>{data?.years}</p>
                </div>
                <div>
                    <p>Periode uploads</p>
                    <p>{data?.period}</p>
                </div>
                <div>
                    <p>Much records</p>
                    <p>{data.data.length}</p>
                </div>
                <div className="details">
                    <div className={open ? 'rotate' : ''}>
                        <RiArrowDropDownLine/>
                    </div>
                </div>
            </div>
            <div>
                {open && 
                    data.data.map((item, index) => 
                        <div className='lists-child' key={index}>
                            <h1>{data.name_file}</h1>
                            <div>
                                <p>Compared with</p>
                                <p>{item.name_file}</p>
                            </div>
                            <div>
                                <p>Presentation</p>
                                <p>{item.precentage}<span>%</span></p>
                            </div>
                            <div className="status">
                                <div className='status-icon' style={item.precentage < 15 ? green : item.precentage < 20 ? yellow : red}></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default RecordList

const green = {
    background: '#2FC58D'
}
const yellow = {
    background: '#F7C934'
}
const red = {
    background: '#F05E70'
}