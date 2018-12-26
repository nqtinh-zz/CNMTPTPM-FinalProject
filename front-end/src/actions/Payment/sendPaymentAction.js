import axios from 'axios';

export const sendPayment = (paymentData,history)=>dispatch=>{
    axios.post('/api/payment/send',paymentData)
        .then(res=>history.push('/tweets'))
        .catch(err=>console.log(err));
};