import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    console.log(props.history);
    return (
        <div className='nav'>
                <div className='page-links'>
                    <Link to='/profile'><button className='link-button'>Profile</button></Link>
                    <Link to='/friends'><button className='link-button'>Friends</button></Link>
                    <Link to='/groups'><button className='link-button'>Groups</button></Link>
                </div>
                <div className='bottom-buttons'>
                    <Link to='/home'><button className='sidebar-button'>Home</button></Link>
                    <Link to='/thanks'><button className='sidebar-button'>Logout</button></Link>
                </div>
        </div>
    )
}

export default Nav;