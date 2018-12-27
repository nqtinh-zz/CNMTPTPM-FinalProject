
import {SEARCH_DATA2} from '../../config/config';

const initialState = {users: null};

export const searchReducer2  = (state = initialState, action)=>{
    switch(action.type){
        case SEARCH_DATA2: 
           return{
               ...state,
               users: action.payload
              
           }
        default: return initialState;
    }
}