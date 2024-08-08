import usersdata from "./users.json"

const FetchData=()=>{
    return (
        <div>
            {usersdata.map((elem)=>{
                return(
                    <div>
                        <h1>Id: {elem.id}</h1>
                        <h1>Login: {elem.login}</h1>
                        <img src={elem.avatar_url} alt="sorry"></img>
                    </div>
                )
            })}
        </div>
    )
}

export default FetchData

