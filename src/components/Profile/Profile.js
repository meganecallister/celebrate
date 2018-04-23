import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import ProfileUpdate from './ProfileUpdate';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType, updateCandyType, updateTreatType } from '../../ducks/reducer';

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
//trying a post, lolz
    handleSave() {
        const { birthday, color, cake, icecream, candy, treat} = this.props;
        const body = { birthday, color, cake, icecream, candy, treat }
        console.log(body)
        console.log('profileInfo:', this.state.profileInfo)
        axios.post('/api/updateInfo/', body)
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
    
    deleteAccount() {
        axios.delete('/api/deleteAccount')
    }

    render() {
        let preferences = this.state.profileInfo.map( (e, i) => {
            return (
                <div key={i} className='preferences'>
                    <p>{`Birthday: ${e.birthday}`}</p>
                    <p>{`Color: ${e.color}`}</p>
                    <p>{`Cake: ${e.cake}`}</p>
                    <p>{`Ice cream: ${e.icecream}`}</p>
                    <p>{`Candy: ${e.candy}`}</p>
                    <p>{`Treat: ${e.treat}`}</p>
                </div>
            )
        })   

        return (
            <div className='profile'>
                <div className='body'>

                    <h2>Profile</h2>

                    { preferences }

                    <div className='buttons'>
                        <button onClick={this.openModal}>Update Info</button>
                        <button id='delete' onClick={this.deleteAccount}>Delete Account</button>
                    </div>

                    <div id="myModal" style={{display: 'none'}}>
                        <div className='modal-content'>
                            <ProfileUpdate
                                handleSave={this.handleSave}
                                closeModal={this.closeModal}
                                profileInfo={this.state.profileInfo}
                            />
                           
                        </div>
                    </div>

                </div>
            </div>
        ) 
    }
}

function mapStateToProps( state ) {
    const { birthday, color, cake, icecream, candy, treat } = state;

    return {
        birthday,
        color,
        cake,
        icecream,
        candy,
        treat
    }
}
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType, updateCandyType, updateTreatType })(Profile);