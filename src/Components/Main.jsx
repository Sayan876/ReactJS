import Count from "./Count"
import Button from "./Button"
import { useCallback, useState } from "react"
const Main = ()=>{

    let[age,setAge] = useState(25)
    let[salary, setSalary] = useState(3000)

    let incAge = useCallback(()=>setAge(age+1),[age])

    let incSal = useCallback(()=>setSalary(salary+500),[salary])
    return(
        <div>
            <Count data={age}>Age:</Count>
           <Button fun={incAge}>Age</Button>
           <Count data={salary}>Salary:</Count>
           <Button fun={incSal}>Salary</Button>
        </div>
    )
}

export default Main