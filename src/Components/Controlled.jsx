import { useState } from "react";

const Controlled = ()=>{
    let[name, setName] = useState("")
    let[comp, setComp] = useState("")
    let[sal,setSal] = useState("")

    let getName=(e)=>{
        setName(e.target.value)
    }

    let getComp =(e)=>{
        setComp(e.target.value)
    }
     
    let getSal=(e)=>{
        setSal(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        console.log(`The name is ${name}`)
        console.log(`Company is ${comp}`)
        console.log(`Salary is ${sal}`)
    }
    return(
        <div>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={getName}/>
                <label>Company:</label>
                <input type="text" value={comp} onChange={getComp}/>
                <label>Salary</label>
                <input type="text" value={sal} onChange={getSal}/>
                <button   onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}

export default Controlled