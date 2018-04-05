import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
            <div className='page-links'>
                <Link to='/main/profile'><button className='link-button'>PROFILE</button></Link>
                <Link to='/main/friends'><button className='link-button'>FRIENDS</button></Link>
                <Link to='/main/groups'><button className='link-button'>GROUPS</button></Link>
                <Link to='/main/home'><button className='link-button'>HOME</button></Link>
                <a href='http://localhost:3003/auth/logout'>
                    <button className='link-button'>LOGOUT</button>
                </a>
            </div>
        </div>
    )      
}

export default Nav;