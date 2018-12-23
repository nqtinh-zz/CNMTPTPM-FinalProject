const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const AllTxSchema = new Schema({
    publicKey: {
        type: String,
        
    },
    address: {
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
        allowNull: false,
    },
    bytetx: {
        type: Number,
    },
    time: {
        type: Date,
        allowNull: false,
    },
    sequence: {
        type: Number,
        allowNull: false,
    },
    key: {
        type: String,
        allowNull: false,
    },
    picture: {
        type: String,
        allowNull: false,
    },
    name: {
        type: String,
        allowNull: false,
    },
    post: {
        type: String,
        allowNull: false,
    },
    following: {
        type: Array,
    },
    
})

module.exports = AllTx = mongoose.model('alltx', AllTxSchema);