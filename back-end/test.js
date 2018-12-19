const User = require('./models/User');
const Block = require('./models/Block');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(()=>console.log('Mongoosedb connected'))
    .catch((err)=>console.log(err));
const publicKey = 'GDMNG3PLGUMPHXPPMRZ7EQRMT34F4JU6574OZIQL3LIK5P76CVW5QMTL';
User.findOne({publicKey})  
    .then(user =>{
        if(!user){
            console.log("khong co gi ca")
        }
        console.log(user);
    })
    .catch(err=>console.log(err));