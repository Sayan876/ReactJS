const Change=()=>{
    let c = ()=>{
        let h1 = document.querySelectorAll("h1")
         
         h1.forEach((element)=>{
            element.innerText="Tonight you will die"
         })
         
    }
    return(
        <div>
            <h1>Hello Adios</h1>
            <h1>Hello Adios</h1>
            <button onClick={c}>click me</button>
        </div>
    )
}

export default Change