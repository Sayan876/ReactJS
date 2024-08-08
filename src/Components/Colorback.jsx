import Card from "./Card"
const Colorback=()=>{
    let x = {
        height:"100vh",
        width:"100%",
        backgroundColor:"black"
    }
    return(
        <div style={x}>
              <h1>Global css</h1>
              <Card></Card>
        </div>
    )
}

export default Colorback