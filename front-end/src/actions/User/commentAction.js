import axios from 'axios';

export const commentAction = (comment, history)=>dispatch=>{
    axios.post('/api/user/reaction',comment)
        .then(res=>history.push('/tweets'))
        .catch(err=>console.log("Not connected"));
};