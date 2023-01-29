const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    title:{
        type: String,
        required: true
    },
    options:[{
        ref: 'Option',
        type: mongoose.Schema.Types.ObjectId
    }]
});

module.exports = mongoose.model('Question', questionSchema);
