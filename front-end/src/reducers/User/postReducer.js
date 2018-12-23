import { GET_POST, POST_LOADING , CLEAR_CURRENT_POST} from '../../config/config';


const initialState = {
    post: null,
    // profiles: null,
    loading: false,
}
export default function(state = initialState, action){
    switch(action.type){
        case POST_LOADING:
            return {
                ...state,
                loading:true
            };
        case GET_POST:
            return{
                ...state,
                post: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_POST:
            return{
                ...state,
                post: null,
            }
        default:
            return state;
    }
}   