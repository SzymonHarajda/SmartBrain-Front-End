import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onSubmit})=>{ 

    return(
        <div>
            <p className="'f3">
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-3">
                    <input className="f4 p2 w-70 center" type="text" name="" id="" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link br3 ph3 pv2 dib white bg-blue" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;