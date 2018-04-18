import React, { Component } from 'react';
import './Friends.css';
import axios from 'axios';

class FriendInfo extends Component {
    constructor() {
        super()
        this.state = {
            friendInfo: []
        };
    }

    displayFriendInfo() {
        axios.get('/displayFriendInfo').then(res => {
            this.setState({
                profileInfo: res.data
            })
        })
        .catch(err => {console.log(err);})
    }

    render() {
        let friendPreferences = this.state.friendInfo.map( (e, i) => {
            return (
                <div key={i}>
                    <h4>Birthday Preferences</h4>
                    <p>{`Birthday: ${e.birthday}`}</p>
                    <p>{`Color: ${e.color}`}</p>
                    <p>{`Cake: ${e.cake}`}</p>
                    <p>{`Ice cream: ${e.icecream}`}</p>
                </div>
            )
        })

        return (
            <div>
                Friend Modal!
                { friendPreferences }

                <button onClick={this.props.closeModal}>Cancel</button>
                <button onClick={this.props.handleSave}>Submit</button>

            </div>
        )
    }
}

export default FriendInfo;