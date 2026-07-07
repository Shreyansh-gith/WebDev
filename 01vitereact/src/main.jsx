import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom React | Space-time</h1>
        </div>
    )
}

// const reactElement = { // this won't get rendered
//                       // because this is our own custom object structure
//                       // but we don't know what structure does React uses to render
                         // React expects a specific, internal object structure with exact property names
//     type : "a",
//     props : {
//         href : "https://www.google.com",
//         target : "_blank"
//     },
//     children : "Click me to visit Google"
// }

const anotherElement = ( //this is jsx, this will also get rendered
    // Behind the scenes, a bundler (like Vite or Babel) compiles this
    //  exact JSX down into a standard JavaScript function call: React.createElement().
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur space"

const reactElement = React.createElement( // this is what react takes as element and parses to an object, 
                                          // like we created our custom structure for our custom react
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'click me to visit Google | ',
    anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode> ,can run without this

    // <MyApp />
    // anotherElement
    reactElement
    // <App />

  // </StrictMode>,
)
 
// The createRoot(...).render() method is highly flexible. It doesn't just render <Component/> functions; 
// it can directly receive:

//1. A function component wrapper (like <MyApp/>)

//2. A JSX variable (like anotherElement)

//3. A raw React element object created via the API (like reactElement)