import React from 'react'
import { NavLink, } from 'react-router-dom'

//import css
import "./Logo.css"

//import img
import Logoimg from "../../../assets/img/image_large.png"

const Logo = () => {
    return (
        <NavLink to="/" >
            <img src={Logoimg} alt="" className='logo' />
        </NavLink>
    )
}

export default Logo