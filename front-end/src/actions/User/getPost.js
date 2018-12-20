import axios from 'axios';

export const getPost = (publicKey)=>dispatch=>{
    console.log(publicKey)
    axios.get('/api/post',publicKey)
        .then(data=>{
            console.log(data);
        })
}