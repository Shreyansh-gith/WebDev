import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div style={{textAlign: "center", fontSize: "24px"}}>Please Login</div>

    return(
        <div style={{textAlign: "center", fontSize: "24px"}}>
            Welcome {user.username}
        </div>
    )
}

export default Profile