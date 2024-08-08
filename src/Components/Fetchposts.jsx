
import axios from "axios"
import { useState,useEffect } from "react"
const Fetchposts=()=>{

    let[users,setUsers]= useState([])
    let[id, setId] = useState(0)
    let[btn , setBtn] = useState(0)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
        .then((response)=>{setUsers(response.data)})
        .catch(()=>{console.log("errorrrr");})
    },[btn])

    let getId = (e) =>{
        setId(e.target.value)
        console.log(id)
    }

    let dataHandle = () =>{
        setBtn(id)
        
    }
    return(
        <div>
          

          <input type="text" value={id}  onChange={getId}/>
          <button onClick={dataHandle}>Submit</button>
          <h1>{users.title}</h1>
        </div>
    )
}

export default Fetchposts