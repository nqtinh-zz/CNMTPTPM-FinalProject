import axios from 'axios';
import { GET_POST, POST_LOADING } from '../../config/config';
export const getPost = () => dispatch =>{
    dispatch(setProfileLoading());
    axios.post('/api/post/getUserPost',publicKey)
        .then(res => dispatch({
            type:GET_POST, 
            payload : res.data,
        }))
        .catch(err => dispatch({
            type: GET_POST,
            payload: {},
        }))
}

//post Loading
export const setPostLoading = ()=>{
    return{
        type: POST_LOADING,
    }
}
