import React from "react";
import '../styles/Banner.scss'

const Banner = ( {text, number} ) => {
    return(
        <div className="banners">
            <h1>{number}</h1>
            <h2>{text}</h2>
        </div>
    )
}

export default Banner