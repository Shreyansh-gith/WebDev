import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "", //{ index: true, Component: Home }, default fallback or home page for a specific nested route path
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   } 
// ])

const router = createBrowserRouter( //This creates a router that uses the browser URL
  createRoutesFromElements(  //It allows route definitions to look like JSX
    <Route path='/' element = {<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
                    {/* //The colon means:
                    //"This part can be anything." */}
      <Route 
      loader={githubInfoLoader}   //Normally data loads after the component renders
      path='github'               // Loader changes it to:
                                  // 1. Fetch data first
                                  // 2. Then render component
      element={<Github />} />
    </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
    {/* //"Hey React, use this router configuration to 
    //decide what component should be displayed." */}
  </StrictMode>,
)

// Routing

//  ✅ createBrowserRouter

//  ✅ Route

//  ✅ RouterProvider

//  ✅ createRoutesFromElements

// Layouts

//  ✅ Parent Route

//  ✅ Child Route

//  ✅ Nested Routing

//  ✅ Outlet

// Navigation

//  ✅ Link

//  ✅ NavLink

//  ✅ Active Navigation

// Dynamic URLs

//  ✅ Route Parameters

//  ✅ :userid

//  ✅ useParams()

// Data Loading

//  ✅ loader

//  ✅ useLoaderData()

// SPA Concepts

//  ✅ URL changes without refresh

//  ✅ Component swapping

//  ✅ Shared layouts