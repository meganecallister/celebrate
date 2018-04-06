import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';
import ProfileDisplay from './ProfileDisplay';

class Profile extends Component {
    constructor() {
        super()

        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {
        const { birthday, color, cake, iceCream } = this.props;

        const body = {
                birthday,
                color,
                cake,
                iceCream
            }
            console.log(body);
        axios.post('/api/updateInfo', body)
        .then(console.log('I am trying to post...'))
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } = this.props;
        return (
            <div className='profile'>
                
                <h2>Profile</h2>
                <ProfileDisplay/>
                <p>When is your birthday?</p>
                <input type='date' onChange={ e => updateBirthdayType( e.target.value) }/>

                <p>What is your favorite...</p>
                <ul>
                    <li>color? <input type='type' onChange={ e => updateColorType( e.target.value) }/></li>

                    <li>cake? <input type='text' onChange={ e => updateCakeType( e.target.value) }/></li>

                    <li>ice cream? <input type='text' onChange={ e => updateIceCreamType( e.target.value) }/></li>
                </ul>
                <div className='check-ice-cream'>
                { this.props.birthday && this.props.color &&this.props.cake && this.props.iceCream
                ?
                <button onClick={this.handleSave}>Save</button>
                : null }
                </div>
            </div>
        ) 
    }
}

function mapStateToProps( state ) {
    const { birthday, color, cake, iceCream } = state;

    return {
        birthday,
        color,
        cake,
        iceCream
    }
}
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(Profile);