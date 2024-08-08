import axios from "axios";
import { useEffect, useState } from "react";

import style from "./fetchaxi.module.css"

const Fetchaxi=()=>{
    let[users,setUsers]= useState([])

    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((response)=>{setUsers(response.data)})
        .catch(()=>{console.log("errorrrr")})
    })

    return(
        <div id={style.parent}>
            {users.map((user)=>{
               let  sendFr=()=>{
                    alert(`Friend request sent to ${user.login}`)
                }
                return(
                    <div id={style.cards}>
                        <img src={user.avatar_url} alt="image" />
                        <h1>{user.login}</h1>
                        <br />
                        <h4>Facebook User</h4>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum error iusto dicta sed nisi!</p>
                        <br />
                        <button onClick={sendFr}>Add Friend</button>
                        <button>Message</button>
                    </div>
                )
            })}
        </div>
    )
}


export default Fetchaxi