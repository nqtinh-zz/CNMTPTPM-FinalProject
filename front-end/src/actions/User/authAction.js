import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Keypair } from 'stellar-base';
import setAuthToken from '../../config/setAuthToken';
import {SET_CURRENT_USER} from '../../config/config';
import SimpleCrypto from "simple-crypto-js"; 
export const signNewAccount = (key)=>dispatch=>{
    console.log(key);
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

//login getuser token
export const loginUser = ( privateKey ) =>dispatch=>{
    try{
        const publicKey = Keypair.fromSecret(privateKey.privateKey).publicKey();
        console.log(publicKey)
        localStorage.setItem('publicKey',publicKey);
        axios.post('/api/user/login',{publicKey: publicKey})
        .then(res => {
            //save to localstorage
            const { token } = res.data;
            const secretKey = privateKey.privateKey;
            // set token to localstorage
            localStorage.setItem('jwtToken',token);
            const keyEncrypt = 'some-unique-key';
            const simpleCrypto = new SimpleCrypto(keyEncrypt);
            const privateKeyEncrypt = simpleCrypto.encrypt(secretKey);
            sessionStorage.setItem('keyDecrypt',keyEncrypt);
            sessionStorage.setItem('privateKeyEncrypt',privateKeyEncrypt)
            //Set token to auth header
            setAuthToken(token);
            //Decode token to get user data
            const decoded = jwt_decode(token);
            localStorage.setItem('sequence',decoded.sequence);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err=>
            // dispatch({
            //     type:GET_ERROR,
            //     payload : err.response.data
            // }));
            console.log(err))
    }catch{
        console.log("err missing key");
    }
    
   
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
    localStorage.removeItem('publicKey');
    sessionStorage.removeItem('privateKeyEncrypt');
    //remove auth header for future request
    setAuthToken(false);
    //set current user to empty object with isAuthenticated is false
    dispatch(setCurrentUser({}));
}