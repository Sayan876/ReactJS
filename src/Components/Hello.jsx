const Hello=(props)=>{
    
    return (<div>
        <h1>Name: {props.data[0].name}</h1>
        <h1>ID: {props.data[0].id}</h1>
        <h1>Skills: {props.data[0].skills}</h1>
    </div>)
}

export default Hello