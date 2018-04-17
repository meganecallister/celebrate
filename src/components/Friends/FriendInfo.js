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

    componentDidMount() {
        console.log('friendInfo: the component mounted');
        axios.get('/displayFriendInfo').then(res => {
            this.setState({
                friendInfo: res.data
            })
            console.log(res.data)
        })
        .catch(err => {console.log(err);})
    }

    render() {
        let friendPreferences = this.state.friendInfo.map( (e, i) => {
            return (
                <div key={i}>
                    {/* {console.log('preferences', e)} */}
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
                { friendPreferences }
            </div>
        )
    }
}

export default FriendInfo;