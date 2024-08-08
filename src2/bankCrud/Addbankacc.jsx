import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import style from "./bcrud.module.css"

const Addbankacc = () =>{
    let navigate = useNavigate()
    let [bname,setBname]=useState("")
    let [accno,setAccno]=useState("")
    let [acholder,setAcholder] = useState("")

    let getBname=(e)=>{
        setBname(e.target.value)
    }

    let getAccno =(e)=>{
        setAccno(e.target.value)
    }

    let getAcholder =(e)=>{
        setAcholder(e.target.value)
    }

    let bankload={
        BankName:bname,
        BankAccNo:accno,
        AccHolder:acholder
    }

    let createAcc =(e)=>{
        e.preventDefault()
        let inputs = document.querySelectorAll("input")
        if(inputs[0].value!=""&&inputs[1].value!=""&&inputs[2].value!=""){
            axios.post("http://localhost:5000/BankAccs",bankload)
        .then(()=>{console.log("Data inserted");navigate("/FetchBankAcc")})
        .catch(()=>{console.log("Failed to insert the data")})

        inputs[0].value=""
        inputs[1].value=""
        inputs[2].value=""
        }else{
            alert("Input fields are empty")
        }
       
    }

    let mover = (e)=>{
        let inputs = document.querySelectorAll("input")
        if(inputs[0].value!=""&&inputs[1].value!=""&&inputs[2].value!=""){
            e.target.style.backgroundColor = "green"
            e.target.style.cursor = "pointer"
        }else{
            e.target.style.backgroundColor="red"
            e.target.style.cursor="not-allowed"
        }


   

    }

    let mleave = (e) =>{
        e.target.style.background="linear-gradient(-225deg,black,rgba(128, 128, 128, 0.397),black)"
    }
    return(
        <div id={style.parentform}>
           <form action="">
            <h2>Create Account</h2>
            
            <input type="text" placeholder="Bank Name" value={bname} onChange={getBname}/>
            <input type="text" placeholder="Bank Account no" value={accno} onChange={getAccno}/>
            <input type="text" placeholder="Account Holder" value={acholder} onChange={getAcholder}/>
            <button onClick={createAcc} onMouseOver={mover} onMouseLeave={mleave}>Submit</button>
           </form>
        </div>
    )
}

export default Addbankacc