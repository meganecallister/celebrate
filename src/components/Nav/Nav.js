import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import cupcake from '../../cupcake-logo.png';
import gift from '../../neon-gift.jpg';

function Nav() {
    return (
        <div className='nav'>

        <menu>
            <img src={cupcake} alt='delicious chocolate cupcake'/>
            <p>Celebrate</p>
            <a href={ process.env.REACT_APP_LOGOUT }>
                <button className='link-button'>Log out</button>
            </a>
        </menu>
            <header>
            <img className='cupcakes' src={gift} alt='cupcakes in a row'/>
            </header>      

            <div className='navBar'>

                <div className='page-links'>
                    <Link to='/main/profile'><button className='link-button'>Profile</button></Link>
                    <Link to='/main/friends'><button className='link-button'>Friends</button></Link>
                    <Link to='/main/groups'><button className='link-button'>Group</button></Link>
                    <Link to='/main/home'><button className='link-button'>About</button></Link>
                </div>
            </div>


        </div>
    )       
}

export default Nav;