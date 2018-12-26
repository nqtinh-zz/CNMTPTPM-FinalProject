import axios from 'axios';
import {SEARCH_DATA} from '../../config/config.js'
export const sendSearch = (Search)=>dispatch=>{
    axios.post('/api/user/search',Search)
        .then(res=>{
        		dispatch({
        		type: SEARCH_DATA,
                payload: res.data

        })
        	})
         .catch(err=>console.log(err));
     };
export const linkSearch = (history)=>dispatch=>{
	return history.push('/search')
}
       
