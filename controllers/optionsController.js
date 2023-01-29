const Question = require('../models/question');
const Option = require('../models/option');

//delete an option
module.exports.delete = function(req,res){
    const id = req.params.id;
    //find the option

    //check if it has any vote

    //delete from Question and Option document

}

//add vote
module.exports.addVote = function(req,res){
    //get the option

    //increment vote count

}