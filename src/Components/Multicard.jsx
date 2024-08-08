import userdt from "./users.json"
import mtcrd from "./mulitcard.module.css"
const Multicard =()=>{
    return(
        <div  id={mtcrd.mainpage}>
            {userdt.map((elem)=>{
                let x = ()=>{
                    return(
                        
                            alert(`Friend request send to ${elem.login}`)
                        
                    )
                }
                return(
                    <div id={mtcrd.cards}>
                        <div id={mtcrd.propic}>
                             <img id={mtcrd.prpc} src={elem.avatar_url} alt="image" />
                             <h1>{elem.login}</h1>
                             <br />
                             <h3>Facebook User</h3>
                             <br />
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim, dicta ipsum dolore maxime facere.</p>

                             <button onClick={x}>Add friend</button>
                             <button>Message</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Multicard