import { useState,useEffect } from "react"
import axios from "axios"
const PracticeCard = () =>{
    

    let[pro,setPro] = useState([])
    let[username, setUsername] = useState()
    let[btn,setBtn] = useState(" ")

    

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${btn}`)
        .then((resp)=>{setPro(resp.data)})
        .catch(()=>{console.log("something's wrong")})
    },[btn])
     
    let getUser=(e)=>{
         setUsername( e.target.value)
    }

    let dataHandle=()=>{
        setBtn(username)
    }
   
    
    return(
        <div>
           <input type="text" value={username} onChange={getUser} />
            <button onClick={dataHandle}>Click here</button>
            <h1>{pro.login}</h1>
            <img src={pro.avatar_url} alt="" />

            

            
           

           
        </div>
    )
}

export default PracticeCard