
import {SEARCH_DATA} from '../../config/config';

const initialState = {users: null};

export const searchReducer  = (state = initialState, action)=>{
    switch(action.type){
        case SEARCH_DATA: 
           return{
               ...state,
               users: action.payload
              
           }
        default: return initialState;
    }
}