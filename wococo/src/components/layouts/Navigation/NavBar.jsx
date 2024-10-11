import React from 'react'
import { NavLink } from 'react-router-dom'


//import css
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navigationContent">
            <ul>
                {/* <li>
                    <NavLink to="/register">
                        Sing up
                    </NavLink>
                </li> */}

                <li>
                    <NavLink to="/singIn">
                        singIn
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar