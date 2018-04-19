import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';
import FriendInfo from './FriendInfo';

class Friends extends Component {
    constructor() {
        super()
        this.state = {
            friendsList: [],
            friendInfo: [],
            newFriend: ''
        };
        this.addFriend = this.addFriend.bind(this);
    }

    componentDidMount() {
        axios.get('/displayFriendsList').then(res => {
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => {console.log(err);})
    }

    handleChangeFriend(value) {
        this.setState({
            newFriend: value 
        })
    }

    addFriend( id ) {
        const body = {
            newFriend: this.state.newFriend
        }

        axios.put(`/api/addFriend/${id}`, body)
        .then( res => {
            this.setState({
                friendsList: res.data
            })
        })
    }

    handleDelete( id ) {
        axios.delete(`/api/deleteFriend/${id}`)
        .then( (res) => {
            this.setState({
                friendsList: res.data
            })
        })
    }

    openModal = ( id ) => {
        document.getElementById('myFriendModal').style.display = 'block';
        axios.get(`/api/displayFriendInfo/${id}`).then(res => {
            this.setState({
                friendInfo: res.data
            })
            console.log('openModal response:', this.state.friendInfo)
        })
    
    }

    closeModal = () => {
        document.getElementById('myFriendModal').style.display = 'none';
    }

    render() {
            let friends = this.state.friendsList.map( (e, i) => {
                return (
                    <div key={i} className='each-friend'>
                        
                            <p>{e.display_name}</p>
                            <img src={e.img}/>

                        <button onClick={() => this.openModal(e.id)}>View Info</button>
                        <button onClick={() => this.handleDelete(e.id)}>Delete</button>

                    </div>
                )
            })

        return (
            <div className='friends'>
                {/* <h2>Friends</h2> */}
                <div className='body'>
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


                        <div id="myFriendModal" style={{display: 'none'}}>
                            <div className='modal-content'>
                            <FriendInfo
                                friendInfo={this.state.friendInfo}
                                closeModal={this.closeModal}
                            />
                            </div>
                        </div>


                </div>
            </div>
            </div>
        )
    }
}

export default Friends;