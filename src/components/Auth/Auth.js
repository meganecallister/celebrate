import React from 'react';
import './Auth.css';
import party from '../../party-background.jpg';

export default function Auth() {
    return (
        <div className='auth'>
        
<div className='stuff'>
            <h1>Celebrate</h1>
            <a href={ process.env.REACT_APP_LOGIN }>
                <button className='link-button'>LOGIN</button>
            </a>
            </div>

        </div>
    )    
}