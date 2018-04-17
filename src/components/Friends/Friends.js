import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';
import FriendsDisplay from './FriendsDisplay';
import FriendsChange from './FriendsChange';
import FriendInfo from './FriendInfo';

class Friends extends Component {
    constructor() {
        super()
        this.state = {
            friendInfo: false
        }
        // this.handleSave = this.handleSave.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        const { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } = this.props;
        const viewFriendInfo = this.state.friendInfo ?
            (
                <div><FriendInfo
                    handleSave={this.handleSave}
                /></div>
            ) :
            null


        return (
            <div className='friends'>
            <div className='body'>
                <h2>Friends</h2>
                
                <input
                // onChange={thisdlfkjs}
                placeholder='Name'
                />
                <button onClick={this.handleClick}>Add Friend</button>
                
                {/* <button onClick={this.handleView}>Preferences</button> */}
                <FriendsDisplay/>
                <div className='popup'>
                        {/* {updateFriends} */}
                    </div>

                </div>
            </div>
        )
    }
}

export default Friends;