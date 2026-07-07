import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
        <h1>React with Chai</h1>
        <Login />  
        {/* //These components have now access to the value broadcasted by UserContext */}
        <Profile />
    </UserContextProvider>
    
  )
} 

export default App

// The Context API creates a global "teleporter" zone. 
// Components can broadcast data, and any child component can instantly 
// tune in and consume that data, skipping the intermediate parents entirely.