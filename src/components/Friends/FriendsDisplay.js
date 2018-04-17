import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';

class FriendsDisplay extends Component {
    constructor() {
        super()
        this.state = {
            friendsList: [],
            newFriend: ''
        };
    }

    componentDidMount() {
        // console.log('friendsList: the component mounted');
        axios.get('/displayFriendsList').then(res => {
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => {console.log(err);})
    }

    handleDelete( id ) {
        console.log('trying to delete a friend!');
        axios.delete(`/api/deleteFriend/${id}`)
        .then( (res) => {
            this.setState({
                friendsList: res.data
            })
            console.log('Delete .then statement!')
        })
    }

    handleChangeFriend(value) {
        this.setState({
            newFriend: value 
        })
        console.log(this.state.newFriend)
    }

    addFriend( id, friend ) {
        console.log('trying to add a friend')
        console.log(this.state.newFriend)

        const body = {
            newFriend: friend
        }

        axios.put(`/api/addFriend/${id}`, body)
        .then(console.log('I am trying to post!'))
        .catch(err => { console.log(err);
        })
    }
    
    render() {
        // console.log('RENDER')
        // console.log('render of friendsdisplay');
        let friends = this.state.friendsList.map( (e, i) => {
            return (
                <div key={i}>
                    {/* {console.log('friends', e)} */}
                    <div onClick={this.handleView}>
                        <p>{e.display_name}</p>
                        <img src={e.img}/>
                    </div>
                    <button onClick={() => this.handleDelete(e.id)}>Delete Friend</button>
                </div>
            )
        })

        return (
            <div>
                <input
                    placeholder='Name'
                    value={this.state.newFriend}
                    onChange={ e => this.handleChangeFriend( e.target.value) }
                />
                <button onClick={this.addFriend}>Add Friend</button>

                { friends }

            </div>
        )
    }
}

export default FriendsDisplay;


