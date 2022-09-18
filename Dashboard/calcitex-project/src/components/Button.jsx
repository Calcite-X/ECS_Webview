import React from 'react'
import {FiPhoneMissed,FiChevronRight} from "react-icons/fi";
import "./button.css";

const styles = {
    top: "2rem",
    position:"relative",
}

// import {  } from "react-icons/io5";
const Button = propse => {
    return (
        <div className='dash_item sip flex justify-between dashboxe1' id={propse.id}>
            <div className="btnicons">
                {propse.ico}                        
            </div>
            <div className="iconmades">
                <span className="iconheads">{propse.icon_head}</span>
                <span className="iconbod">{propse.icon_money}</span>
            </div>
            <div className="kingu" style={styles}>
                <span className="text-xl font-semibold no block"><FiChevronRight /></span>
            </div>
        </div>
    )
}

export default Button
