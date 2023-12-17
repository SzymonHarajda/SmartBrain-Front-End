import React from "react";
import './FaceRecognition.css'


const FaceRecognition = ({imgURLState,box})=>{
    
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id='inputImage' src={imgURLState}  width='500px'height='auto'/>
                    {box.map((face, index) => {
                    return (
                    <div
                        key={index}
                        className="bounding-box"
                        style={{
                            top: face.topRow,
                            right: face.rightCol,
                            bottom: face.bottomRow,
                            left: face.leftCol,
                            }}
            ></div>
            );
        })}
            </div>
        </div>
    
    )
}

export default FaceRecognition;