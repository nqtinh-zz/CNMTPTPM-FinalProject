import axios from 'axios';

export const sendSearch = (Search)=>dispatch=>{
    axios.post('/api/user/search',Search)
        .then(res=>console.log("Send done"))
        .catch(err=>console.log(err));
};