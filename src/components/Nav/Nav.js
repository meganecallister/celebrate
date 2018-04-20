import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import party from '../../party-background.jpg';

function Nav(props) {
    return (
        <div className='nav'>

            <header>
            {/* <img src={party} alt='bright watercolor background'/> */}
            </header>      

            <div className='navBar'>
                {props.userDataJSX}



                <div className='page-links'>


                    <Link to='/main/profile'><button >Profile</button></Link>
                    <Link to='/main/friends'><button >Friends</button></Link>
                    {/* <Link to='/main/groups'><button >Groups</button></Link> */}
                    <Link to='/main/about'><button >About</button></Link>

                <div class="HAM">
                    <p class='menu-word'>MENU</p>
                    <svg class="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path fill="#000" d="M8.667 15h30c.552 0 1-.447 1-1s-.448-1-1-1h-30c-.552 0-1 .447-1 1s.447 1 1 1zM8.667 37h30c.552 0 1-.447 1-1s-.448-1-1-1h-30c-.552 0-1 .447-1 1s.447 1 1 1zM8.667 26h30c.552 0 1-.447 1-1s-.448-1-1-1h-30c-.552 0-1 .447-1 1s.447 1 1 1z"/>
                    </svg>
                </div>


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