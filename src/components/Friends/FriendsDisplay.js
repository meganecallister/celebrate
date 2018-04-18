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
        this.addFriend = this.addFriend.bind(this);
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
            // console.log('Delete .then statement!')
        })
    }

    handleChangeFriend(value) {
        this.setState({
            newFriend: value 
        })
        // console.log(this.state.newFriend)
    }

    addFriend( id ) {
        const body = {
            newFriend: this.state.newFriend
        }
        console.log(body)
        axios.put(`/api/addFriend/${id}`, body)
        .then( res => {
            console.log('I am trying to post!', res);

        this.setState({
            friendsList: res.data
        })
        }).catch(err => {
            console.log(err)
        })
        console.log(this.state.friendsList)
    }
    
    render() {
        // console.log('RENDER')
        // console.log('render of friendsdisplay');
        let friends = this.state.friendsList.map( (e, i) => {
            return (
                <div key={i} className='each-friend'>
                    {/* {console.log('friends', e)} */}
                    <div onClick={this.handleView}>
                        <p>{e.display_name}</p>
                        <img src={e.img}/>
                    </div>
                    <button onClick={() => this.handleDelete(e.id)}>Delete</button>
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
                    <div className='friendsList'>
                        { friends }
                    </div>
            </div>
        )
    }
}

export default FriendsDisplay;


