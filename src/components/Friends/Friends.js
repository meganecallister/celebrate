import React, {Component} from 'react';
import './Friends.css';
import FriendsChange from './FriendsChange';

class Friends extends Component {
    render() {
        return (
            <div className='friends'>
            <div className='body'>
                <h2>Friends</h2>
                <FriendsChange/>
                </div>
            </div>
        )
    }
}

export default Friends;