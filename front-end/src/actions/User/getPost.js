import axios from 'axios';
import { GET_POST, POST_LOADING } from '../../config/config';
export const getPost = (publicKey) => dispatch =>{
    dispatch(setPostLoading());
    axios.post('/api/post/getUserPost',{publicKey})
        .then(res => {
            console.log(res.data)
            return  dispatch({
                type:GET_POST, 
                payload : res.data,
            });
        }          
        )
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
