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
                    <h2>Friend</h2>
                    <div className='friend-info'>
                        {/* <img src={e.img}/>
                        <p>{e.display_name}</p> */}

                    
                    <p>{`Birthday: ${e.birthday}`}</p>
                    <p>{`Color: ${e.color}`}</p>
                    <p>{`Cake: ${e.cake}`}</p>
                    <p>{`Ice cream: ${e.icecream}`}</p>
                    </div>

                    <div className='close-friends-modal'>
                        <button onClick={this.props.closeModal}>Close</button>   
                        <button className='delete-button' onClick={() => this.props.handleDelete(e.id)}>Delete Friend</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {/* { this.props.friends } */}
                { friendPreferences }

            <div className='close-friends-modal'>
              
                {/* <button onClick={this.props.closeModal}>Close</button>    */}
                </div>
            </div>
        )
    }
}

export default FriendInfo;