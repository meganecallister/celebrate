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
                <div className='popup'>

                    <p>When is your birthday?</p>
                    <input type='date' onChange={ e => updateBirthdayType( e.target.value) }/>

                    <p>color? <input type='type' onChange={ e => updateColorType( e.target.value) }/></p>

                    <p>cake? <input type='text' onChange={ e => updateCakeType( e.target.value) }/></p>

                    <p>ice cream? <input type='text' onChange={ e => updateIceCreamType( e.target.value) }/></p>
                
                    <div>
                        { this.props.birthday && this.props.color &&this.props.cake && this.props.iceCream
                        ?
                        <button onClick={this.handleSave}>Save</button>
                        : null }
                    </div>
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
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(ProfileUpdate);