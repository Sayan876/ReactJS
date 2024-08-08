import React from "react"
const Count = (x) =>{
    return(
        <div>

            <h1>{x.children} {x.data}</h1>
            
        </div>
    )
}
export default React.memo(Count)