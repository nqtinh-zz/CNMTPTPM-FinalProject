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
    sequence: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
    },
    bandwidth: {
        type: Number,
        allowNull: false,
        defaultValue: 0,
    },
    // Last transaction date for bandwidth calculate
    bandwidthTime: {
        type: Date,
    },
    transactions: {
        type: Number,
        defaultValue: null,
    }
})

module.exports = User = mongoose.model('users', UserSchema);