import axios from 'axios';

const initialState = {
    user: {},
    birthday: '',
    color: '',
    cake: '',
    iceCream: ''
}


const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
// const DISPLAY_PROFILE_INFO = 'DISPLAY_PROFILE_INFO';
const UPDATE_BIRTHDAY_TYPE = 'UPDATE_BIRTHDAY_TYPE';
const UPDATE_COLOR_TYPE = 'UPDATE_COLOR_TYPE';
const UPDATE_CAKE_TYPE = 'UPDATE_CAKE_TYPE';
const UPDATE_ICE_CREAM_TYPE = 'UPDATE_ICE_CREAM_TYPE';


function reducer(state = initialState, action) {
    
    switch( action.type ) {

        case UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        // case DISPLAY_PROFILE_INFO:
        //     return Object.assign({}, state, { profile: action.payload });
        
        case UPDATE_BIRTHDAY_TYPE:
            return Object.assign({}, state, { birthday: action.payload });

        case UPDATE_COLOR_TYPE:
            return Object.assign({}, state, { color: action.payload });
        
        case UPDATE_CAKE_TYPE:
            return Object.assign({}, state, { cake: action.payload });

        case UPDATE_ICE_CREAM_TYPE:
            return Object.assign({}, state, { iceCream: action.payload });

        // case HANDLE_SAVE:
        //     return Object.assign({}, state, { party: action.payload });

        default: return state;
    }
}



export function getUserInfo() {
    const userData = axios.get('/auth/me').then( res => {
    return res.data;
    })
        return {
            type: UPDATE_USER_INFO,
            payload: userData
            }
}

// export function displayProfileInfo() {
//     const profileInfo = axios.get('/displayProfile').then( res => {
//     return res.data;
//     })
//         return {
//             type: DISPLAY_PROFILE_INFO,
//             payload: profileInfo
//             }
// }

export function updateBirthdayType( birthday ) {
    return {
        type: UPDATE_BIRTHDAY_TYPE,
        payload: birthday
    }
}
export function updateColorType( color ) {
    return {
        type: UPDATE_COLOR_TYPE,
        payload: color
    }
}
export function updateCakeType( cake ) {
    return {
        type: UPDATE_CAKE_TYPE,
        payload: cake
    }
}
export function updateIceCreamType( iceCream ) {
    return {
        type: UPDATE_ICE_CREAM_TYPE,
        payload: iceCream
    }
}

export default reducer;