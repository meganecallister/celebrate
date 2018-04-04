import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    console.log(props.history);
    return (
        <div className='nav'>
                <div className='page-links'>
                    <Link to='/profile'><button className='link-button'>PROFILE</button></Link>
                    <Link to='/friends'><button className='link-button'>FRIENDS</button></Link>
                    <Link to='/groups'><button className='link-button'>GROUPS</button></Link>
                    <Link to='/home'><button className='link-button'>HOME</button></Link>
                    <Link to='/thanks'><button className='link-button'>LOGOUT</button></Link>
                </div>
        </div>
    )
}

export default Nav;