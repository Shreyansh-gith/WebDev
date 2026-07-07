import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
 

// Core Concepts:
  // Redux is the core library, while React-Redux is the implementation used to wire them together.
  // Unlike traditional Redux, Redux Toolkit automates many tasks, so you no longer need to worry about manually avoiding state mutation (1:01:11 - 1:01:49).
// The Store:
  // Every application should ideally have a single Store (the single source of truth).
  // It is configured using configureStore (1:01:51 - 1:02:41).
// Slices and Reducers:
  // The state is managed in Slices created with createSlice.
  // These slices require a name, an initialState, and a reducers object containing functions to handle state changes (1:03:01 - 1:04:36).
// State Updates:
  // Inside reducers, you get access to state and action.
  // Redux Toolkit simplifies updates; you can directly push values to the state, and it handles the immutability behind the scenes (1:04:55 - 1:05:42).
// Exporting and Using:
  // Export individual reducer functions for use in components, and export the main reducer for the store.
  // Use useDispatch to trigger actions (sending data) and useSelector to read values from the store (1:06:07 - 1:07:35).