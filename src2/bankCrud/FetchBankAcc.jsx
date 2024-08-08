import { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import style from "./bcrud.module.css"
const FetchBankAcc = () =>{
    let [pro,setPro] = useState([])
    let navigate = useNavigate()

    let [load,setLoad] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:5000/BankAccs")
        .then((resp)=>{setPro(resp.data)})
        .catch(()=>{console.log("Cannot fetch")})
        setLoad(false)
    },[load])

    let deleteForm=(id)=>{
        axios.delete(`http://localhost:5000/BankAccs/${id}`)
        .then(()=>{console.log("Account Deleted");setLoad(true)})
    }

    let fupdate = (id) =>{
       navigate(`/Updatea/${id}`)
    } 
    return(
        <div id={style.parenttable}>
            <h1>Total Bank Accounts: {pro.length}</h1>
            <br />
            <table border="1">
                <tr>
                    <td>Bname</td>
                    <td>AccNo</td>
                    <td>Holder Name</td>
                    <td>Action</td>
                </tr>
                {pro.map((acc)=>{
                    return(
                        <tr>
                            <td>{acc.BankName}</td>
                            <td>{acc.BankAccNo}</td>
                            <td>{acc.AccHolder}</td>
                            <td>
                                <button onClick={()=>{fupdate(acc.id)}}>Edit</button>
                                <button onClick={()=>{deleteForm(acc.id)}}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default FetchBankAcc