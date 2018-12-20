import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../config/setAuthToken';
import {SET_CURRENT_USER} from '../../config/config';
export const signNewAccount = (key)=>dispatch=>{
    axios.post('/api/register',key)
    .then(res=>dispatch({
        type:"REGISTER_ACTION",
        privatekey: res.data.privatekey,
        publickey: res.data.publickey
    }))
    .catch(err=>console.log(err));
}

export const registerAccount = ()=>dispatch=>{
        axios.get('/api/register')
        .then(res=>dispatch({
            type:"REGISTER_ACTION",
            privatekey: res.data.privatekey,
            publickey: res.data.publickey
        }))
        .catch(err=>console.log(err));
};
export const loginAction = (priKey)=>{
    return {
        type: "LOGIN_ACTION",
        priKey,
    }

}

//login getuser token
export const loginUser = ( privateKey ) =>dispatch=>{
    axios.post('/api/user/login',privateKey)
        .then(res => {
            //save to localstorage
            const { token } = res.data;
            const secretKey = privateKey.privateKey;
            // set token to localstorage
            localStorage.setItem('jwtToken',token);
            sessionStorage.setItem('privateKey',secretKey)
            //Set token to auth header
            setAuthToken(token);
            //Decode token to get user data
            const decoded = jwt_decode(token);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err=>
            // dispatch({
            //     type:GET_ERROR,
            //     payload : err.response.data
            // }));
            console.log(err))
};

// set logged user

export const setCurrentUser = (decoded)=>{
    // console.log(localStorage.getItem('jwtToken'))
    // console.log(localStorage.getItem('privateKey'));
    return{
        type: SET_CURRENT_USER,
        payload: decoded,
    }
}

//Log user out 
export const logoutUser = ()=> dispatch => {
    //remove token from localStorage
    localStorage.removeItem('jwtToken');
    sessionStorage.removeItem('privateKey');
    //remove auth header for future request
    setAuthToken(false);
    //set current user to empty object with isAuthenticated is false
    dispatch(setCurrentUser({}));
}