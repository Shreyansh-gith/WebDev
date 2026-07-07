import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <> 
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 shadow-lg rounded-3xl">
                <button 
                onClick={() => {setColor("red")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
                style={{backgroundColor: "red"}}>
                    Red
                </button>
                <button 
                onClick={() => {setColor("green")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{backgroundColor: "green"}}>
                    Green
                </button>
                <button 
                onClick={() => {setColor("blue")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{backgroundColor: "blue"}}>
                    Blue
                </button>
                <button 
                onClick={() => {setColor("lavender")} }
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
                style={{backgroundColor: "lavender"}}>
                    Lavender
                </button>
                <button 
                onClick={() => {setColor("gray")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{backgroundColor: "gray"}}>
                    Gray
                </button>
                <button 
                onClick={() => {setColor("Yellow")} }
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
                style={{backgroundColor: "yellow"}}>
                    Yellow
                </button>
                <button 
                onClick={() => {setColor("pink")} }
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
                style={{backgroundColor: "pink"}}>
                    Pink
                </button>
                <button 
                onClick={() => {setColor("purple")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{backgroundColor: "purple"}}>
                    Purple
                </button>
                <button 
                onClick={() => {setColor("teal")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{backgroundColor: "teal"}}>
                    Teal
                </button>
                <button 
                onClick={() => {setColor("white")} }
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
                style={{backgroundColor: "white"}}>
                    White
                </button>
                <button 
                onClick={() => {setColor("black")} }
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{backgroundColor: "black"}}>
                    Black
                </button>
            </div>

        </div>

      </div>
    </>
  )
}

export default App


//// 1. Define your colors outside the return statement
// const colors = [
//   { name: "Red", value: "#ef4444", textColor: "white" },
//   { name: "Green", value: "#22c55e", textColor: "white" },
//   { name: "Blue", value: "#3b82f6", textColor: "white" },
//   { name: "Yellow", value: "#eab308", textColor: "black" },
//   // ... add the rest of your colors
// ];

// // Inside your main w-full h-screen container:
// return (
//   <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    
//     {/* The Floating Container */}
//     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        
//         {/* Mapping through the buttons */}
//         {colors.map((c) => (
//           <button
//             key={c.name}
//             onClick={() => setColor(c.value)}
//             className="outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer"
//             style={{ backgroundColor: c.value, color: c.textColor }}
//           >
//             {c.name}
//           </button>
//         ))}

//       </div>
//     </div>
    
//   </div>
// )