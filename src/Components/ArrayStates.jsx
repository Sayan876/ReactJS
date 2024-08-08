import { useState } from "react";



const ArrayStates=()=>{
    let[arr,setArr] = useState(["hi","hello","bye"])
    return(
        <div>
           {arr.map((elem)=>{
            return(
                <h1>{elem}</h1>
            )
        })}
        </div>
        
    )
}

export default ArrayStates