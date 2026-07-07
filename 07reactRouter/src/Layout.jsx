import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header />
        <Outlet /> 
        {/* //this is where child routes appear
        // like about,contact etc */}
        <Footer />
        </>
    )
}

export default Layout 

//The header and footer remain fixed.
//Only the middle section changes.
//Without Layout, you'd have to put Header 
// and Footer inside every page.