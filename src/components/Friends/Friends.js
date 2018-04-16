import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';
import FriendsDisplay from './FriendsDisplay';
import FriendsChange from './FriendsChange';

class Friends extends Component {
    constructor() {
        super()
        this.state = {
            update: false
        }
        // this.handleSave = this.handleSave.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        return (
            <div className='friends'>
            <div className='body'>
                <h2>Friends</h2>
                <FriendsDisplay/>
                <button onClick={this.handleClick}>Add Friend</button>
                    <div className='popup'>
                        {/* {updateFriends} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Friends;