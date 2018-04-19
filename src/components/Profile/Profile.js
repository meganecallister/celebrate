import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import ProfileUpdate from './ProfileUpdate';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profileInfo: []
        }
       
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        axios.get('/displayProfileInfo').then(res => {
            this.setState({
                profileInfo: res.data
            })
        })
    }

    handleSave() {
        const { birthday, color, cake, icecream } = this.props;
        const body = { birthday, color, cake, icecream }

        axios.put('/api/updateInfo', body)
        .then((res) => {
            this.closeModal();
            this.setState({
                profileInfo: res.data
            })
        })
    }


    openModal = () => {
        document.getElementById('myModal').style.display = 'block';
    }

    closeModal = () => {
        document.getElementById('myModal').style.display = 'none';
    }


    render() {
        let preferences = this.state.profileInfo.map( (e, i) => {
            return (
                <div key={i}>
                    <p>Birthday Preferences</p>
                    <p>{`Birthday: ${e.birthday}`}</p>
                    <p>{`Color: ${e.color}`}</p>
                    <p>{`Cake: ${e.cake}`}</p>
                    <p>{`Ice cream: ${e.icecream}`}</p>
                </div>
            )
        })   

        return (
            <div className='profile'>
                <div className='body'>

                    <h2>Profile</h2>

                    { preferences }
                    <button onClick={this.openModal}>Update Info</button>

                    <div id="myModal" style={{display: 'none'}}>
                        <div className='modal-content'>
                            <ProfileUpdate
                                handleSave={this.handleSave}
                                closeModal={this.closeModal}
                            />
                           
                        </div>
                    </div>

                </div>
            </div>
        ) 
    }
}

function mapStateToProps( state ) {
    const { birthday, color, cake, icecream } = state;

    return {
        birthday,
        color,
        cake,
        icecream
    }
}
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(Profile);