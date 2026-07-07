import React from "react";

const UserContext = React.createContext()
//It doesn't hold data yet; it just creates the 
// structure required to pass data around

export default UserContext;

{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */} 


//Blueprint for creating contexts
//1. Create a dedicated context file.
//2. Create a provider wrapper component to manage the state and wrap your component tree.
//3. Import the hook and your specific context file in any nested child component that needs the data.