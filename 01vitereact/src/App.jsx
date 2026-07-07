import Chai from "./chai"

function App() {
  const username = "chai aur code"

  return (
    <> 
      <h1>Chai aur React | {username} </h1> 
      {/* /* {username} - it is an evaluated expression i.e you can only use a final result  */}
      {/* this is how you inject js variables in react */ }
      {/* You cannot write complex logic like if/else statements or for loops directly inside */}
      <Chai /> 
      <p>Test para</p>
    </>  
    
    //to render multiple html elements,you have to enclose them in a single element
    // like a div tag or a simple fragment tag <>(vite rules!)
    //Plus, vite requires the js files to be named as jsx files(Javascript XML)
  )
}

export default App
 