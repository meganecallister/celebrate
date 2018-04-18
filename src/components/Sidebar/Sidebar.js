import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            {/* <Link to='/main/profile'> */}
            <div className='info'>
                {props.userDataJSX}
            </div> 
            {/* </Link> */}
        </div>
    )
    
}

export default Sidebar;