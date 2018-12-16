import axios from 'axios';

export const postAction = (post)=>dispatch=>{
    axios.post('/api/post',post)
        .then(res=>console.log("Send done"))
        .catch(err=>console.log("Not connected"));
};