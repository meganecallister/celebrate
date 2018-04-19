import React, { Component } from 'react';
import './Friends.css';
import axios from 'axios';

class FriendInfo extends Component {
    constructor() {
        super()

    }

    render() {
        let friendPreferences = this.props.friendInfo.map( (e, i) => {
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

               <button id="exit" onClick={this.props.closeModal}>X</button>                
                { friendPreferences }
                <button onClick={this.props.closeModal}>Close</button>   

            </div>
        )
    }
}

export default FriendInfo;