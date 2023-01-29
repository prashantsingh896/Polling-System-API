const mongoose = require('mongoose');


const optionSchema = new mongoose.Schema({
    _id:{
        type: Number
    },
    title:{
        type: String,
        required: true
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    votes:{
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Option', optionSchema);
