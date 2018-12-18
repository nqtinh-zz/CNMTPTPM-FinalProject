const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name :{
        type: String,
    },
    avatar:{
        type: String,
    },
    publicKey:{
       type: String,
       
    },
    sequence:{
        type:Number,
    },
    balance:{
        type: Number,
    },
    energy:{
        type: Number,
    },
    transactions:{
        type:Number,
    }
})

module.exports =  User = mongoose.model('users',UserSchema);