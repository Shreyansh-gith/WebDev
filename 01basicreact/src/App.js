import Chai from "./Chai";

function App() {
  return (
    <>
      <h1>Chai aur React</h1>
      <Chai />
      <p>Test para</p>
    </>
    //to render multiple html elements,you have to enclose them in a single element
    // like a div tag or a simple fragment tag <>(vite rules!)
  );
}

export default App;
 

// <h1>Chai aur React | Write code here</h1> 
    // This file will get exported to index.js which will then execute it