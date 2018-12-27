import axios from 'axios';

export const sendComment = (commentData,history)=>dispatch=>{
    axios.post('/api/user/reaction',commentData)
        .then(res=>history.push('/login'))
        .catch(err=>console.log(err));
};