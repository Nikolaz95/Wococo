import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'


const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root