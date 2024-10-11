import React from 'react'
import useTitle from '../../../hooks/useTitle';
//import styles from "./MainContent.module.css";


//import css
import "./MainContent.css"

const MainContent = () => {
    useTitle('Wococo');
    return (
        <main className="main">
            <div className="mainPage">
                <h1>Welcome to Wococo</h1>
            </div>
        </main>
    )
}

export default MainContent