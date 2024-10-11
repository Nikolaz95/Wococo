import React from 'react'
import { NavLink } from 'react-router-dom'



//import styles from "./Header.module.css";

//import css
import "./Header.css"

//import components
import Logo from '../Logo/Logo'
import NavBar from '../Navigation/NavBar'

const Header = () => {
    return (
        //<header className={styles.main}>Header</header>
        <header >
            <div className='content-header'>
                <Logo />
                <div className="content-header">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}

export default Header