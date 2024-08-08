import { useRef } from "react"
import { useState } from "react"
const UselessCal=()=>{


    let firstdigit = useRef()
    let seconddigit = useRef()
    let [res,setRes] = useState(0)

    

    const addnum = (e)=>{
        e.preventDefault()
        console.log(parseInt(firstdigit.current.value) + parseInt(seconddigit.current.value))
        setRes(parseInt(firstdigit.current.value) + parseInt(seconddigit.current.value))

    }

    let substract = (e)=>{
        e.preventDefault()
        console.log(firstdigit.current.value - seconddigit.current.value)
        setRes(firstdigit.current.value - seconddigit.current.value)

    }

    let multiply = (e)=>{
        e.preventDefault()
        console.log(firstdigit.current.value * seconddigit.current.value)
        setRes(firstdigit.current.value * seconddigit.current.value)

    }

    let division = (e)=>{
        e.preventDefault()
        console.log(firstdigit.current.value / seconddigit.current.value)
        setRes((firstdigit.current.value / seconddigit.current.value))

    }
    return(
        <div>
            <form action="">
                <input type="number" placeholder="Enter the first digit" ref={firstdigit}/>
                <input type="number" placeholder="Enter the second digit" ref={seconddigit} />
                 <button onClick={addnum}>+</button>
                 <button onClick={substract}>-</button>
                 <button onClick={multiply}>*</button>
                 <button onClick={division}>/</button>

                 <h1>Answer:{res}</h1>
            </form>
        </div>
    )
}

export default UselessCal