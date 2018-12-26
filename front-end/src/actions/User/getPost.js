import axios from 'axios';
import { GET_POST, GET_OWNER_POST,POST_LOADING,GET_PAYMENT_HISTORY } from '../../config/config';
export const getPost = (publicKey) => dispatch =>{
    dispatch(setPostLoading());
    axios.post('/api/post/getUserPost',{publicKey})
        .then(res => {
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
export const getOwnerPost = (publicKey) =>dispatch=>{
    axios.get(`/api/user/${publicKey}`)
        .then(res=>{
            return dispatch({
                type:GET_OWNER_POST,
                payload:res.data,
            });
        })
        .catch(err => dispatch({
            type: GET_OWNER_POST,
            payload: {},
        }))
}
export const getPaymentHistory = (publicKey) => dispatch =>{
    dispatch(setPostLoading());
    axios.post('/api/post/getPaymentHistory',{publicKey})
        .then(res => {
            return  dispatch({
                type:GET_PAYMENT_HISTORY, 
                payload : res.data,
            });
        }          
        )
        .catch(err => dispatch({
            type: GET_PAYMENT_HISTORY,
            payload: {},
        }))
}
//post Loading
export const setPostLoading = ()=>{
    return{
        type: POST_LOADING,
    }
}
