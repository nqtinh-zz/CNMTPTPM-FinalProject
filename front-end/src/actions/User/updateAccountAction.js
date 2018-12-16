import axios from 'axios';

export const updateAccount = (data)=>dispatch=>{
    axios.post('/api/update-account',data)
        .then(res=>console.log("Send done"))
        .catch(err=>console.log("Not connected"));
};