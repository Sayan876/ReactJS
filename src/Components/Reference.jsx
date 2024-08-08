import { useRef } from "react"
const Reference=()=>{
    let demoRef= useRef()

    let x =()=>{
         demoRef.current.style.backgroundColor = "red"
         
    }
    return(
        <div>
           <h1 ref={demoRef}>Reference thing</h1>
           <button onClick={x}>Change Background Color</button>
        </div>
    )
}

export default Reference