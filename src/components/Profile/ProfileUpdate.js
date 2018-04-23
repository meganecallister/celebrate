import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType, updateCandyType, updateTreatType } from '../../ducks/reducer';

class ProfileUpdate extends Component {
    constructor() {
        super()

    }

    render() {
        // let currentInfo = this.props.profileInfo.map( (pref, i) => {
        //     return (
        //         <div key={i} className='current-info'>
        //             <input 
        //                 type='text'
        //                 placeholder={pref.birthday}>
        //                 onChange={ e => this.props.updateBirthdayType( e.target.value) }
        //                 </input>
        //             <input
        //                 type='text'
        //                 placeholder={pref.color}>
        //                 onChange={ e => this.props.updateColorType( e.target.value) }
        //                 </input>
        //             <input
        //                 type='text'
        //                 placeholder={pref.cake}>
        //                 onChange={ e => this.props.updateCakeType( e.target.value) }
        //                 </input>
        //             <input
        //                 type='text'
        //                 placeholder={pref.icecream}>
        //                 onChange={ e => this.props.updateIceCreamType( e.target.value) }
        //                 </input>
        //             <input
        //                 type='text'
        //                 placeholder={pref.candy}>
        //                 onChange={ e => this.props.updateCandyType( e.target.value) }
        //                 </input>
        //             <input
        //                 type='text'
        //                 placeholder={pref.treat}>
        //                 onChange={ e => this.props.updateTreatType( e.target.value) }
        //                 </input>
        //         </div>
        //     )
        // })   
        return (
            <div className='profile-update'>
              
                <h2>Update</h2>
                {/* {currentInfo} */}
            <div className='profile-inputs'>
                        <input
                            type='text'
                            placeholder='Birth Month & Day'
                            onChange={ e => this.props.updateBirthdayType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Color'
                            onChange={ e => this.props.updateColorType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Cake'
                            onChange={ e => this.props.updateCakeType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Ice Cream'
                            onChange={ e => this.props.updateIceCreamType( e.target.value) }
                        />
                                                <input
                            type='text'
                            placeholder='Candy'
                            onChange={ e => this.props.updateCandyType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Treat'
                            onChange={ e => this.props.updateTreatType( e.target.value) }
                        />
                        </div>
                <div className='close-profile-modal'>

                    <button onClick={this.props.handleSave}>Submit</button>
                    <button id='cancel' onClick={this.props.closeModal}>Cancel</button>

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
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType, updateCandyType, updateTreatType })(ProfileUpdate);
// export default ProfileUpdate;