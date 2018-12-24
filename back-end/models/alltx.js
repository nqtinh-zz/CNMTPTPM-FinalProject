const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const AllTxSchema = new Schema({
    publicKey: {
        type: String,  
    },
    hash: {
        type: String,  
    },
    address: {
        type: String,  
    },
    addressinteract: {
        type: String,  
    },
    operation: {
        type: String, 
    },
    height: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    tx: {
        type: String,
    },
    bytetx: {
        type: Number,
    },
    time: {
        type: Date,
    },
    sequence: {
        type: Number,
    },
    reaction: {
        type: Number,
    },
    key: {
        type: String,
    },
    picture: {
        type: String,
    },
    name: {
        type: String,
    },
    post: {
        type: String,
    },
    comment: {
        type: String,
    },
    following: {
        type: Array,
    },
    
})

module.exports = AllTx = mongoose.model('alltx', AllTxSchema);