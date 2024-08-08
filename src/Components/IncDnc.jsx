import { useState } from "react";
const IncDnc=()=>{
    let[abc,setAbc] = useState(0)
   let x =()=>{
        setAbc(abc+1)
   }

   let y =()=>{
    setAbc(abc-1)
   }

   let z =()=>{
    setAbc(abc=0)
   }
    return(<div>
        <h1>{abc}</h1>
        <button onClick={x}>Increase</button>
        <button onClick={y}>Decrease</button>
        <button onClick={z}>Reset</button>
    </div>)
}

export default IncDnc