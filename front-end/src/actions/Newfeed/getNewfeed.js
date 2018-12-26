import axios from 'axios';
import { GET_NEWFEED, GET_NEWFEED_USER,NEWFEED_LOADING } from '../../config/config';
export const getNewfeed = (publicKey) => dispatch =>{
    dispatch(setPostLoading());
    axios.post('/api/newfeed/getNewfeed',{publicKey})
        .then(res => {
            return  dispatch({
                type:GET_NEWFEED, 
                payload : res.data,
            });
        }          
        )
        .catch(err => dispatch({
            type: GET_NEWFEED,
            payload: {},
        }))
}
export const getNewfeedUser =(publicKey)=>dispatch=>{
    axios.post('/api/newfeed/getNewfeedUser',{publicKey})
        .then(res=>{
            return dispatch({
                type:GET_NEWFEED_USER,
                payload:res.data
            })
        })
}
// export const getOwnerNewfeed = (publicKey) =>dispatch=>{
//     axios.get(`/api/user/${publicKey}`)
//         .then(res=>{
//             return dispatch({
//                 type:GET_OWNER_POST,
//                 payload:res.data,
//             });
//         })
//         .catch(err => dispatch({
//             type: GET_OWNER_POST,
//             payload: {},
//         }))
// }

//post Loading
export const setPostLoading = ()=>{
    return{
        type: NEWFEED_LOADING,
    }
}
