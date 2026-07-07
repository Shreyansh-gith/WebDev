import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return(
        <UserContext.Provider value = {{user, setUser}}>
        {children}  
        {/* {children} represents whatever components you wrap inside this provider */}
        </UserContext.Provider>
    )
} 

export default UserContextProvider