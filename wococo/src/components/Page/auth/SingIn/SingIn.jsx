import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';


//import css
import "./SingIn.css"

const SingIn = () => {
    const [title, setTitle] = useTitle('Wococo - Sing In');


    return (
        <section className="registering-section">
            <h1 className='title-registering'>Sign in</h1>
            <div className="card-registering">
                <div className="lef-registering">
                    <form className='form-registering'>

                        <label htmlFor="mail">Your Email:</label>
                        <input type="email" id='mail' placeholder='fake@email...' />

                        <label htmlFor="pwd">Password :</label>
                        <div className="pasword-content">
                            <input type="password" />
                        </div>

                        <div className="btn-login">
                            <button type="submit" className="login">
                                Log in
                            </button>
                        </div>
                    </form>
                    <div className="divider-text">
                        <span>Or:</span>
                    </div>

                    <NavLink to="/register">
                        <div className="btn-registering">
                            <button className="create-acc">Create a New Accoutn</button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default SingIn