import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import gift from '../../neon-gift.jpg';

function Nav() {
    return (
        <div className='nav'>
            
            <div className='navBar'>

                <div className='page-links'>
                    <Link to='/main/profile'><button className='link-button'>PROFILE</button></Link>
                    <Link to='/main/friends'><button className='link-button'>FRIENDS</button></Link>
                    <Link to='/main/groups'><button className='link-button'>GROUPS</button></Link>
                    <Link to='/main/home'><button className='link-button'>ABOUT</button></Link>
                    <a href='http://localhost:3003/auth/logout'>
                        <button className='link-button'>LOGOUT</button>
                    </a>
                </div>
            </div>

            //=== I KNOW THE HEADER HAS STRETCHING PROBLEMS ===//
            <header>
            <img className='cupcakes' src={gift} alt='cupcakes in a row'/>
            </header>
        </div>
    )       
}

export default Nav;