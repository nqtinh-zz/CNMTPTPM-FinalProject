import axios from 'axios';
import {SEARCH_DATA2} from '../../config/config.js'
export const sendSearch2 = (publicKey)=>dispatch=>{
    axios.get(`/api/user/search/${publicKey}`)
        .then(res=>{
        		dispatch({
        		type: SEARCH_DATA2,
                payload: res.data

        })
        	})
         .catch(err=>console.log(err));
     };
export const linkSearch2 = (history)=>dispatch=>{
	return history.push('/search2')
}
       
