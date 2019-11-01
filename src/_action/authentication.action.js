import { authenticationConstants } from '../_constants';
import { authenticationService } from '../_service/authentication.service';
// import {history} from '../_helpers/history';

export const authenticationAction = {
    signin,
    signup
}

function signin (signin, password,history) {
    
    return dispatch => {
        dispatch(request());
        authenticationService.signin(signin,password).then(
            response => {
                dispatch(success(response));
                debugger
                history.push('/profile');
            },
            error => {
                dispatch(failed(''));
            }
        )
    }

    function request() { return { type: authenticationConstants.SIGNIN_REQUEST};}
    function success( user) { return {type: authenticationConstants.SIGNIN_SUCCESS,user}; }
    function failed( error) { return {type: authenticationConstants.SIGNIN_FAILED,error}};
}

function signup () {
    return dispatch1 => {
        dispatch1()
    }
}