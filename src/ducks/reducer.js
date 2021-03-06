import axios from 'axios';

const initialState = {
    user: {},
    birthday: '',
    color: '',
    cake: '',
    icecream: '',
    candy: '',
    treat: '',
    friends: [],
}


const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_FRIENDS_LIST = 'UPDATE_FRIENDS_LIST';
const UPDATE_BIRTHDAY_TYPE = 'UPDATE_BIRTHDAY_TYPE';
const UPDATE_COLOR_TYPE = 'UPDATE_COLOR_TYPE';
const UPDATE_CAKE_TYPE = 'UPDATE_CAKE_TYPE';
const UPDATE_ICE_CREAM_TYPE = 'UPDATE_ICE_CREAM_TYPE';
const UPDATE_CANDY_TYPE = 'UPDATE_CANDY_TYPE';
const UPDATE_TREAT_TYPE = 'UPDATE_TREAT_TYPE';


function reducer(state = initialState, action) {
    
    switch( action.type ) {

        case UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case UPDATE_FRIENDS_LIST:
            return Object.assign({}, state, { friends: action.payload });
        
        case UPDATE_BIRTHDAY_TYPE:
            return Object.assign({}, state, { birthday: action.payload });

        case UPDATE_COLOR_TYPE:
            return Object.assign({}, state, { color: action.payload });
        
        case UPDATE_CAKE_TYPE:
            return Object.assign({}, state, { cake: action.payload });

        case UPDATE_ICE_CREAM_TYPE:
            return Object.assign({}, state, { icecream: action.payload });

        case UPDATE_CANDY_TYPE:
            return Object.assign({}, state, { candy: action.payload });

        case UPDATE_TREAT_TYPE:
            return Object.assign({}, state, { treat: action.payload });

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

export function updateFriendsList( friends ) {
    return {
        type: UPDATE_FRIENDS_LIST,
        payload: friends
    }
}

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
export function updateIceCreamType( icecream ) {
    return {
        type: UPDATE_ICE_CREAM_TYPE,
        payload: icecream
    }
}
export function updateCandyType( candy ) {
    return {
        type: UPDATE_CANDY_TYPE,
        payload: candy
    }
}
export function updateTreatType( treat ) {
    return {
        type: UPDATE_TREAT_TYPE,
        payload: treat
    }
}

export default reducer;