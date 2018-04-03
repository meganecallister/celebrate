import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
    console.log(props.history);
    return (
        <div className='sidebar'>
            Sidebar
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

export default Sidebar;