import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
    // render() {
        // const { user } = this.props
        // const userDataJSX = user.display_name ?
        //     (
        //         <div>
        //             <img src={user.img} />
        //             <p></p>
        //             {console.log(user.authId)}
        //             <p>{user.birthday}</p>
        //         </div>
        //     ) :
        //     (<p>Please log in!</p>)


    
        return (
            <div className='sidebar'>
                <section className='info'>
                    <Link to='profile'>
                        {/* <img className='profile-pic' src={props.user.img} alt='profile pic'/> */}
                    </Link>
                    <div className='name-birthday'>
                        {/* <p className='sidebar-name'>{user.display_name}</p> */}
                    </div>
                    {props.userDataJSX}
                </section>
                
            </div>
        )
    
}

export default Sidebar;