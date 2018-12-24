import { GET_POST, POST_LOADING, GET_OWNER_POST, CLEAR_CURRENT_POST } from '../../config/config';


const initialState = {
    post: null,
    profile: null,
    loading: false,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case GET_OWNER_POST:
            return {
                ...state,
                profile: action.payload,
            };
        case CLEAR_CURRENT_POST:
            return {
                ...state,
                post: null,
            }
        default:
            return state;
    }
}   