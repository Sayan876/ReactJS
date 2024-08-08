const Button = (y)=>{
    return(
        <div>
            <button onClick={y.fun}>Increment {y.children}</button>
        </div>
    )
}

export default Button