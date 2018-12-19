import  {SET_CURRENT_USER} from '../../config/config';
import isEmpty from '../../validation/is-empty';
const initialState = {
    isAuthenticated : false,
    user: {}
};

export default function(state= initialState, action){
    switch(action.type){
        case SET_CURRENT_USER: 
            console.log ('localstorage: '+localStorage.getItem('jwtToken'));
            console.log('sessionStorage '+sessionStorage.getItem('privateKey'));
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default : return state;
    }
};