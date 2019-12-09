import React from 'react'

// Components:
import Footer from './footer'
import Header from './header'

function Layout({ children }) {
    return (
        <>
            <Header/>
                <hr/>
                <b>Pages main content:</b>
                <main>{ children }</main>
                <hr/>
            <Footer/>
        </>
    )
} 
 
export default Layout
