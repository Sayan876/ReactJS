import { useRef } from "react"
import style from "./rainbow.module.css"
const Rainbow = ()=>{
    
    let x = (e)=>{
        let div = document.querySelectorAll("div")
        div.forEach((elem)=>{
            elem.style.backgroundColor = e.target.innerText
        })
        console.log(e.target.innerText)
    }

    let y = (e)=>{
        
        let buttons = document.querySelectorAll("button")
         buttons.forEach((elem)=>{
           elem.addEventListener("mouseover",()=>{
            elem.style.backgroundColor=e.target.innerText
           })
         })
        
    }

    let z = (e)=>{
        let buttons = document.querySelectorAll("button")
        buttons.forEach((elem)=>{
            elem.addEventListener("mouseout",()=>{
                elem.style.backgroundColor = "grey"
            })
        })
    }
   return(
       <div id={style.parent}>
         <div id={style.child}>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Red</button>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Blue</button>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Green</button>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Violet</button>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Orange</button>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Yellow</button>
            <button onClick={x} onMouseOver={y} onMouseLeave={z}>Indigo</button>
         </div>
       </div> 
   )
} 

export default Rainbow