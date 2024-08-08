import { useState } from "react"

const Objst =()=>{

    let [obj, setObj]= useState([{pname:"Allen",id:123,Compnany:"Ubisoft"},
                                 {pname:"Alex",id:456, Compnany:"RockStar Games"},
                                 {pname:"David",id:789, Compnany:"Mad Finger"},
                                 {pname:"Dhruvi",id:669, Compnany:"Stem Engine"},
                                 {pname:"Maitry",id:416, Compnany:"Unreal"},
                                 {pname:"Crush",id:780,Compnany:"Adobe"},
                                 {pname:"Claire",id:223, Compnany:"Topaz"},
                                 {pname:"Alexa",id:416 , Compnany:"Microsoft"},
                                 {pname:"David",id:709, Compnany:"Toei Animation"},
                                 {pname:"Lucy", id:809, Compnany:"Shuisia"}])
    return(<div>
        <table border="1">
             <tr >
                <td>Emp Id</td>
                <td>Emp Name</td>
                <td>Emp Company</td>
             </tr>
        {obj.map((elem)=>{
            return(
                 <tr>
                    <td>{elem.id}</td>
                    <td>{elem.pname}</td>
                    <td>{elem.Compnany}</td>
                 </tr>
                )
            })}
            </table>
    </div>)
}

export default Objst