import { useState } from "react"

const States =()=>{
    let[abc,setAbc] = useState("h1")
    let x=()=>{
        setAbc("What's up?")
    }
    return (
        <div>
            <h1>{abc}</h1>
            <h1>{abc}</h1>
            <h1>{abc}</h1>
            <h1>{abc}</h1>
            <h2>{abc}</h2>
            <button onClick={x}>click me</button>
        </div>
    )
}


export default States