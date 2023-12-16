import React from "react";


const Rank = ({name,enrise})=>{
    return(
        <div>
            <div className="white f3">
                
                {`${name}, your current entry count is ...`}
            </div>
            <div className="white f1">
                {enrise}
                
            </div>
        </div>
    
    )
}

export default Rank;