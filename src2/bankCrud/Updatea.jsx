import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import style from "./bcrud.module.css"

const Updatea =()=>{
    let obj = useParams()
    let navigate = useNavigate()
    let [bname,setBname]=useState("")
    let [accno,setAccno]=useState("")
    let [acholder,setAcholder] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:5000/BankAccs/${obj.abc}`)
        .then((resp)=>{setBname(resp.data.BankName)
                       setAccno(resp.data.BankAccNo)
                       setAcholder(resp.data.AccHolder)})
    },[obj])
    
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
    
    let updateForm =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/BankAccs/${obj.abc}`,bankload)
        .then(()=>{console.log("Updated");navigate("/FetchBankAcc")})
    }
    

    let mover =(e) =>{
        e.target.style.backgroundColor="blue"
        e.target.style.cursor="pointer"
    }


    let mleave = (e) =>{
        e.target.style.background="linear-gradient(-225deg,black,rgba(128, 128, 128, 0.397),black)"
    }
    return(
        <div id={style.updateform}>
           <form action="">
            <h2>Update Account</h2>
            <input type="text" placeholder="Bank Name" value={bname} onChange={getBname}/>
            <input type="text" placeholder="Bank Account no" value={accno} onChange={getAccno}/>
            <input type="text" placeholder="Account Holder" value={acholder} onChange={getAcholder}/>
            <button onClick={updateForm} onMouseOver={mover} onMouseLeave={mleave}>Submit</button>
           </form>
        </div>
    )
}
export default Updatea