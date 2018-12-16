import axios from 'axios';

export const signNewAccount = (key)=>dispatch=>{
    axios.post('/api/register',key)
    .then(res=>dispatch({
        type:"REGISTER_ACTION",
        privatekey: res.data.privatekey,
        publickey: res.data.publickey
    }))
    .catch(err=>console.log(err));
}

export const registerAccount = ()=>dispatch=>{
        axios.get('/api/register')
        .then(res=>dispatch({
            type:"REGISTER_ACTION",
            privatekey: res.data.privatekey,
            publickey: res.data.publickey
        }))
        .catch(err=>console.log(err));
};
export const loginAction = (priKey)=>{
    return {
        type: "LOGIN_ACTION",
        priKey,
    }

}