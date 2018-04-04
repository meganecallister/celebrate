import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
    console.log(props.history);
    return (
        <div className='sidebar'>
            <section className='info'>
                <Link to='/profile'><div className='profile-pic'></div></Link>
                <div className='name-birthday'>
                    <p className='sidebar-name'>Username</p>
                    {/* <p className='sidebar-bday'>Birthday</p>             */}
                </div>
            </section>
        </div>
    )
}

export default Sidebar;