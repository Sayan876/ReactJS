import userpics from "./users.json"

import fcrd from "./freshcard.module.css"
const Freshcard = () =>{
    return (
        <div id={fcrd.mainbody} >
            {userpics.map((elem)=>{
                let x = ()=>{
                    alert(`Friend request sent to ${elem.login}`)
                }
                return(
                    <div id={fcrd.cards}>
                       <img src={elem.avatar_url} alt="image" />
                       <h1>{elem.login}</h1>
                       <br />
                       <h4>Facebook User</h4>
                       <br />
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, amet.</p>
                       <br />
                       <button onClick={x}>Add Friend</button><button>Message</button>
                    </div>
                )
            })}
        </div>
    )
}


export default Freshcard