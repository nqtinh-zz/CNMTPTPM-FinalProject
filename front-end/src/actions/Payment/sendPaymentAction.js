import axios from 'axios';

export const sendPayment = (paymentData)=>dispatch=>{
    axios.post('/api/payment/send',paymentData)
        .then(res=>console.log("Send done"))
        .catch(err=>console.log(err));
};