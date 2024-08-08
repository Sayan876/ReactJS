import { useRef } from "react"
const TakeInp=()=>{
    let demoRef = useRef()

    let x = ()=>{
          console.log(demoRef.current.value)
    }

    return(
        <div>
            <label htmlFor="">Name:</label>
            <input ref={demoRef} type="text" placeholder="Enter the name"/>
            <button onClick={x}>Submit</button>
        </div>
    )
}

export default TakeInp