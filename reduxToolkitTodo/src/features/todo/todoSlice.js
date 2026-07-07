//naming convention hai ki reducers ka name slice rakhte hai while using redux toolkit
import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid unique ids generate karta hai

const initialState = {
    todos : [
        {
            id: 1,
            text: "Hello world"
        }
    ]  
}

export const todoSlice = createSlice({  //slice - reducer ka bada version, slice are features
    name: 'todo',  //slices ke naam hote hai  // har slice ka initial state hota hai
    initialState,
    reducers: { // reducers me properties and unke function hote hain
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload //payload ek object hai
            }
            state.todos.push(todo)
        },           //redux toolkit me hum function ki definitions bhi likhte unlike useContext
        // (state, action) syntax ka part hai and inka access hamesha rehta hai
        // 'state' - current time me initial state me kya-kya values/situation hai unka access deta hai
        // 'action' -  
        removeTodo: (state, action) => {
            // const id = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer