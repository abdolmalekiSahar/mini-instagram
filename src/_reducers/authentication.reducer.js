import {authenticationConstants} from '../_constants';

const initialState = {signinRequest: false, user: null};

export const authentication = (state = initialState, action) => {
    
    const {type,user,error} = action;

    switch (type) {
        case authenticationConstants.SIGNIN_REQUEST:
            return {...state, signinRequest: true};
        case authenticationConstants.SIGNIN_SUCCESS:
            return {...state, SIGNRequest: false, user};
        case authenticationConstants.SIGN_FAILED:
            return {...state, SIGNRequest: false, error};
        default:
            return state;
    }
}