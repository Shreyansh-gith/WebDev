import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({ // type = object ka input leta hai
    reducer: todoReducer
}) 

// store-centralized location where all global data resides, 
// preventing the need to pass data manually through 
// every level of a component tree, which is commonly known as prop drilling 

// store enforces a strict flow; state is read-only and can only be modified through reducers