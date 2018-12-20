const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const BlockSchema = new Schema({
    height: {
        type: Number,
        primaryKey: true,
    },
    time: {
        type: Date,
        allowNull: false,
    },
    txs: {
        type: String,
        allowNull: false,
    },
    hash: {
        type: String,
        allowNull: false,
        unique: true,
    },
    appHash: {
        type: String,
        allowNull: false,
    }
})

module.exports = Block = mongoose.model('blocks', BlockSchema);