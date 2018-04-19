import React from 'react';
import './Auth.css';
import cupcake from '../../cupcake-logo.png';

export default function Auth() {
    return (
        <div className='auth'>
        <menu>
            {/* <img src={cupcake} alt='delicious chocolate cupcake'/>
            <p>Celebrate</p> */}
            <a href={ process.env.REACT_APP_LOGIN }>
                <button className='link-button'>Log in</button>
            </a>
        </menu>
            {/* <div className='left-side'> */}
                <h1>Celebrate</h1>
                <img src={cupcake} alt='delicious chocolate cupcake'/>
            {/* </div>
            <div className='right-side'> */}
                <p className='catch-phrase'>Join us in celebrating the lives of others.</p>
                <a href={ process.env.REACT_APP_LOGIN }>
                    <button className='auth-button'>click here!</button>
                </a>
            {/* </div> */}
        </div>
    )    
}