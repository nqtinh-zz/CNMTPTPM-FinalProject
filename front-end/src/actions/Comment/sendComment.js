import axios from 'axios';

export const sendComment = (commentData)=>dispatch=>{
    axios.post('/api/user/reaction',commentData)
        .then(res=>console.log("Send done"))
        .catch(err=>console.log(err));
};