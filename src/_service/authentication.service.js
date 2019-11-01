import {TIMEOUT_DELAY, HOST} from '../_constants';
import axios from 'axios';

export const authenticationService = {
    signin,
    signup
}

async function signin (signin,password) {
    let timeout = null;
    try {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        timeout = setTimeout(() => {source.cancel()}, TIMEOUT_DELAY);
        
        const response = await axios ({
            url: `${HOST}/users/login`,
            method: 'post',
            headers: {'content-type': 'application/json'},
            cancelToken: source.token,
            data: {
                login:signin,
                password
            }
        });
        if (response.status === 200){
            if(timeout) clearTimeout(timeout);
            debugger
            localStorage.setItem("userData", response.data.username);
            axios.defaults.headers.common['userToken']=(response.data.userToken)
            return response.data
        }else {
            if(timeout) clearTimeout(timeout);
            return Promise.reject({isTimeout: false,error:response.data});
        }

    } catch (error){
        if (timeout) clearTimeout (timeout);
        if (axios.isCancel(error)){
            return Promise.reject({isTimeout: true});
        }else {
           return Promise.reject({isTimeout:false,error}) 
        }
    }
}

function signup () {
    return null
}