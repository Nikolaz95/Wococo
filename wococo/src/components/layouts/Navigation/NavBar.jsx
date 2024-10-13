import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


//import css
import "./NavBar.css"


//import img
import AvatarDefoult from "../../../assets/img/icon2-user.png";


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = "John Doe";



    return (
        <div className="navigationContent">
            <ul>
                {isLoggedIn ? (
                    <li>
                        <div className="UserNavbar">
                            <figure>
                                <img src={AvatarDefoult} className="userIcon" alt={user} />
                            </figure>
                            <p>{user}</p>
                        </div>
                    </li>
                ) : (
                    <li>
                        <NavLink to="/register">
                            Sign In
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default NavBar