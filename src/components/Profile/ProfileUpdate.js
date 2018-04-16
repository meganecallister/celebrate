import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';
// import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';

class ProfileUpdate extends Component {
    constructor() {
        super()

        // this.handleSave = this.handleSave.bind(this);
    }
    
    // handleSave() {
    //     console.log('trying to save')
    //     console.log(this.props)
    //     const { birthday, color, cake, icecream } = this.props;

    //     const body = {
    //             birthday,
    //             color,
    //             cake,
    //             icecream
    //         }
    //         console.log(body);
    //     axios.post('/api/updateInfo', body)
    //     .then(console.log('I am trying to post...'))
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }


    render() {
        console.log('props', this.props);
        return (
            <div className='profile-update'>
                <div className='popup'>

                    <p>When is your birthday?</p>
                    <input type='date' onChange={ e => this.props.updateBirthdayType( e.target.value) }/>

                    <p>color? <input type='type' onChange={ e => this.props.updateColorType( e.target.value) }/></p>

                    <p>cake? <input type='text' onChange={ e => this.props.updateCakeType( e.target.value) }/></p>

                    <p>ice cream? <input type='text' onChange={ e => this.props.updateIceCreamType( e.target.value) }/></p>
                
                    <div>
                        { this.props.birthday && this.props.color && this.props.cake && this.props.icecream
                        ?
                        <button onClick={this.props.handleSave}>Save</button>
                        : null }
                    </div>
                </div>
            </div>
        )
    }
}

// function mapStateToProps( state ) {
//     const { birthday, color, cake, icecream } = state;

//     return {
//         birthday,
//         color,
//         cake,
//         icecream
//     }
// }
// export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(ProfileUpdate);
export default ProfileUpdate;