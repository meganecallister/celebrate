import React from 'react';
import './Auth.css';
import cupcake from '../../cupcake-logo.png';

export default function Auth() {
    return (
        <div className='auth'>
        <menu>
            <a href={ process.env.REACT_APP_LOGIN }>
                <button className='link-button'>Log in</button>
            </a>
        </menu>
                <h1>Celebrate</h1>
                <img src={cupcake} alt='delicious chocolate cupcake'/>
                <p className='catch-phrase'>Join us in celebrating the lives of others.</p>
        </div>
    )    
}