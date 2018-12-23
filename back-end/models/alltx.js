const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const AllTxSchema = new Schema({
    publicKey: {
        type: String,
        primaryKey: true,
    },
    address: {
        type: String,
        primaryKey: true,
    },
    operation: {
        type: String,
        primaryKey: true,
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
    bandwidth: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
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
AllTxSchema.index({ publicKey: 1, height: 1 }, { unique: true });

module.exports = AllTx = mongoose.model('alltx', AllTxSchema);