import axios from 'axios';

export const postAction = (post, history)=>dispatch=>{
    axios.post('/api/post',post)
        .then(res=>history.push('/login'))
        .catch(err=>console.log("Not connected"));
};