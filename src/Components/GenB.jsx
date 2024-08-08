import { useContext } from "react"
import { userData } from "../App"
const GenB=()=>{
    let data = useContext(userData)
    return(
        <div>
        <h1>{data}</h1>
        <h1>Howdy! Whatcha you got?</h1>
        </div>
    )
}

export default GenB