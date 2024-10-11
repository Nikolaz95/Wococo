import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useTitle from '../../../../hooks/useTitle';

//import css
import "./Register.css"

const Register = () => {
    useTitle('Wococo - Register');

    return (
        <section className='cr-acc'>

            <h1 className='title-account'>Create Accunt</h1>

            <div className="content-accountcard">
                <div className="account-card">
                    <form className='form-registering'>
                        <label htmlFor="name">Your Username:</label>
                        <input type="text" name="name" placeholder='username...' />
                        <br />

                        <label htmlFor="mail">Your Emai:</label>
                        <input type="email" name="email" id='mail' placeholder='fake@email.com' />
                        <br />

                        <label htmlFor="pwd">Password :</label>
                        <input type="password" name="password" id='pwd' placeholder='password...' />

                        <div className="btn-login">
                            <button className="create-accBtn" type="submit" >
                                Create your accunt
                            </button>
                        </div>
                    </form>
                </div>
                <p>You already have account ?</p>

                <NavLink to="/singIn" className="singIn">
                    <p>Sing In</p>
                </NavLink>
            </div>
        </section>
    )
}

export default Register