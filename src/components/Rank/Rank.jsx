import React from "react";


const Rank = ({name,enries})=>{
    return(
        <div>
            <div className="white f3">
                
                {`${name}, your current entry count is ...`}
            </div>
            <div className="white f1">
                {enries}
                
            </div>
        </div>
    
    )
}

export default Rank;