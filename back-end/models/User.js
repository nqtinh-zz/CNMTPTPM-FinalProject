const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        defaultValue: null,
    },
    avatar: {
        type: String,
        defaultValue: null,
    },
    publicKey: {
        type: String,
        primaryKey: true,
        unique: true,
    },
    balance: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
    },
    sequence: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
    },
    energy: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
    },
    lastpage: {
        type: Number,

    },
    lastposition: {
        type: Number,

    },
    post: {
        type: String,
    },
    following: {
        type: Array,
    },
    transactions: {
        type: Number,
        defaultValue: null,
    }
})

module.exports = User = mongoose.model('users', UserSchema);