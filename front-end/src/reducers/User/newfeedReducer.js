import { GET_NEWFEED,NEWFEED_LOADING } from '../../config/config';

const initialState = {
    post: null,
    profile: null,
    loading: false,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case NEWFEED_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_NEWFEED:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        // case GET_OWNER_NEWFEED:
        //     return {
        //         ...state,
        //         profile: action.payload,
        //     };
        // case CLEAR_CURRENT_NEWFEED:
        //     return {
        //         ...state,
        //         post: null,
        //     }
        default:
            return state;
    }
}   