import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';

class ProfileUpdate extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div className='profile-update'>
              
                <p>Birthday Info</p>

                    <p>Birthdate:
                        <input
                            type='text'
                            placeholder='Month & Day'
                            onChange={ e => this.props.updateBirthdayType( e.target.value) }
                        />
                    </p>
                    <p>Favorite Color:
                        <input
                            type='text'
                            placeholder='Color'
                            onChange={ e => this.props.updateColorType( e.target.value) }
                        />
                    </p>
                    <p>Favorite Cake: 
                        <input
                            type='text'
                            placeholder='Cake'
                            onChange={ e => this.props.updateCakeType( e.target.value) }
                        />
                    </p>
                    <p>Favorite Ice Cream: 
                        <input
                            type='text'
                            placeholder='Ice Cream'
                            onChange={ e => this.props.updateIceCreamType( e.target.value) }
                        />
                    </p>

                    <button onClick={this.props.closeModal}>Cancel</button>
                    <button onClick={this.props.handleSave}>Submit</button>

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
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(ProfileUpdate);
// export default ProfileUpdate;