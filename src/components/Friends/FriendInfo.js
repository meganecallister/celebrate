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

                    <div className='friend-info'>
                        <div onClick={() => this.openModal(e.id)}>
                            <img src={e.img}/>
                        </div>
                        <p>{e.display_name}</p>
                    </div>
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
                {/* { this.props.friends } */}
                { friendPreferences }

            <div className='close-friends-modal'>
              
                {/* <button onClick={() => this.handleDelete(e.id)}>Delete</button> */}
                <button>Delete Eventually</button>
                <button onClick={this.props.closeModal}>Close</button>   
                </div>
            </div>
        )
    }
}

export default FriendInfo;