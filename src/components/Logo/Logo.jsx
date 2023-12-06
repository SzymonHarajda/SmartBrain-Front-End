import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from "./icons8-brain-96.png"

const Logo = ()=>{
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2">
                <div className="pa3" style={{ height: 150}}>
                <img style={{paddingTop:"5px"}}src={brain} alt="brain" />
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;