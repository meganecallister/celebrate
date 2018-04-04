import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Nav from '../../components/Nav/Nav';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                <Nav/>
                <Sidebar/>
                <div className='white-space'>
                    <p>Here is some information...</p>
                </div>
                <div className='balance'></div>
            </div>
        )
    }
}

export default Profile;