import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from "react-router"
import './index.css'
import Layout from './Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Github, { githubInfo } from './Components/Github'
import User from './Components/User'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />}/>
      <Route path='about' element = {<About />}/>
      <Route path='contact' element = {<Contact />}/>
      <Route 
      loader = {githubInfo}
      path='github'
      element = {<Github />}
      />
      <Route path='user/:userId' element = {<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
