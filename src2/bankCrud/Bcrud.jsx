import style from "./bcrud.module.css"
import { Link } from "react-router-dom"
const Bcrud=()=>{
    return(
        <div id={style.nav}>
           <Link to="/Addbankacc">ADD BankAccout</Link>
           <Link to="/FetchBankAcc">Fetch Accounts</Link>
        </div>
    )
}

export default Bcrud