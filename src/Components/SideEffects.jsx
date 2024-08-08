import { useState,useEffect } from "react"

const SideEffects =()=>{

    let[count1,setCount1] = useState(0)
    let[count2,setCount2] = useState(0)

    useEffect(()=>{
        console.log("Fire in the hole!")
    },[count2])
    return(
        <div>
            <h1>{count1}</h1>
            <button onClick={()=>setCount1(++count1)}>Increase</button>
            <br />
            <h1>{count2}</h1>
            <button onClick={()=>setCount2(++count2)}>Increase</button>
        </div>
    )
}

export default SideEffects