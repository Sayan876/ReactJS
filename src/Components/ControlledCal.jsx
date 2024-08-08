import { useState } from "react"
const ControlledCal=()=>{
    let[num1,setNum1] = useState(0)
    let[num2,setNum2] = useState(0)
    let[res,setRes] = useState(0)

    let getNum1=(e)=>{
        setNum1(e.target.value)
    }

    let getNum2=(e)=>{
        setNum2(e.target.value)
    }

     let add=(x)=>{
        x.preventDefault()
        console.log(Number(num1)+Number(num2))
        setRes(Number(num1)+Number(num2))
     }

     let sub=(x)=>{
        x.preventDefault()
        console.log(num1-num2)
        setRes(num1 - num2)
     }

     let mul=(x)=>{
        x.preventDefault()
        console.log(num1*num2)
        setRes(num1 * num2)
     }


     let div=(x)=>{
        x.preventDefault()
        console.log(num1/num2)
        setRes(num1/num2)
     }

    
    
    return(
        <div>
            <form action="">
                <label htmlFor="">First Digit</label>
                <input type="text" value={num1} onChange={getNum1}/>
                <label htmlFor="">Second Digit</label>
                <input type="text" value={num2} onChange={getNum2} />
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <button onClick={mul}>*</button>
                <button onClick={div}>/</button>

                <h1>{res}</h1>
            </form>
        </div>
    )
}

export default ControlledCal