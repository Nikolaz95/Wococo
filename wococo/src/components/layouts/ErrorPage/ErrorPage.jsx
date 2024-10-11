import React from 'react'
import useTitle from '../../../hooks/useTitle';


//import img
import Eror from "../../../assets/img/icon-error.png"

//import css
import "./ErrorPage.css"

const ErrorPage = () => {
    useTitle('Error Page 404');

    return (
        <div className="eror-content">
            <div className="erorMain-content">
                <img src={Eror} alt="" className='img-eror' />
                <p className='text-eror vibrate-1'>This page not exist</p>
                <img src={Eror} alt="" className='img-eror' />
            </div>
        </div>
    )
}

export default ErrorPage