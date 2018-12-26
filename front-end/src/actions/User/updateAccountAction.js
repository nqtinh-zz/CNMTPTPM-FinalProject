import axios from 'axios';

export const updateAccount = (data,history)=>dispatch=>{
    axios.post('/api/update-account',data)
        .then(res=>console.log("success"))
        .catch(err=>console.log("Not connected"));
};