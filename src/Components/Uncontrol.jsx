import { useRef } from "react"
const Uncontrol=()=>{
    let userName= useRef()
    let userComp = useRef()

    let formHandle = (e)=>{
       e.preventDefault()
       console.log("Form submitted")
       console.log(`Username : ${userName.current.value}`)
       console.log(`Company: ${userComp.current.value}`)
    }
    return(
        <div>
           <form action="">
              <input type="text" placeholder="Enter the name" ref={userName}/>
              <input type="text" placeholder="Enter the company" ref={userComp}/>
              <button onClick={formHandle}>Submit</button>
           </form>
        </div>
    )
}

export default Uncontrol