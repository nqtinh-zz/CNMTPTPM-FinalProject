const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BlockSchema = new Schema({
    height :{
        type: Number,
    },
    time:{
        type: Date,
    },
    hash:{
       type: String,
    },
    data:{
        type:Array,
    },
})

module.exports =  Block = mongoose.model('blocks',BlockSchema);