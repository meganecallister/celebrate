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

    handleDelete( id ) {
        console.log('trying to delete a friend!');
        axios.delete(`/api/deleteFriend/${id}`)
        .then( () => {
            console.log('Delete .then statement!')
        })
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
                <FriendsDisplay
                handleDelete = {this.handleDelete}/>
                <div className='popup'>
                        {/* {updateFriends} */}
                    </div>

                </div>
            </div>
        )
    }
}

export default Friends;