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
            </div>
        )
    }
}

export default Profile;