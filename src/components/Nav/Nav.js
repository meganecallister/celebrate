import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import party from '../../party-background.jpg';

function Nav() {
    return (
        <div className='nav'>

            <header>
            <img src={party} alt='bright watercolor background'/>
            </header>      

            <div className='navBar'>
                <div className='page-links'>
                    <Link to='/main/profile'><button >Profile</button></Link>
                    <Link to='/main/friends'><button >Friends</button></Link>
                    <Link to='/main/groups'><button >Group</button></Link>
                    <Link to='/main/home'><button >About</button></Link>
                </div>
                <menu>
                    <a href={ process.env.REACT_APP_LOGOUT }>
                        <button>Log out</button>
                    </a>
                </menu>
            </div>

        </div>
    )       
}

export default Nav;