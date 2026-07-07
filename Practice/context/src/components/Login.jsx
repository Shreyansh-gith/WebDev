import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" />
            {" "}
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login