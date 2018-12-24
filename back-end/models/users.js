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

    },
    balance: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
    },
    interaction: [{
        hash: String,
        mention: [{
            address:String,
            comment: String,
            reactions: Number,
        }],
    }],
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