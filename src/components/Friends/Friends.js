import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Nav from '../../components/Nav/Nav';
import './Friends.css';

class Friends extends Component {
    render() {
        return (
            <div className='friends'>
                <Nav/>
                <Sidebar/>
            </div>
        )
    }
}

export default Friends;