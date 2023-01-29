const Question = require('../models/question');
const Option = require('../models/option');

//home controller
module.exports.home = function(req,res){
    Question.find().exec(function (err, questions) {
        return res.end(JSON.stringify(questions));
    });
}

//view a question by id
module.exports.view = function(req,res){
    const id = req.params.id;
    const question = Question.findOne({id: id});
    res.status(200);
    return res.end(JSON.stringify(question));
}

//create a question
module.exports.createQuestion = function(req,res){
    const question = Question.create({
        id:Question.countDocuments()+1,
        title: req.body.title
    })
    res.status(200);
    return res.end(JSON.stringify(question));
}

module.exports.createOption = function(req,res){
    const id = req.params.id;
    //find the question by id
    const question = Question.findOne({id:id});
    //if question is found 
    if(question){
        const option = Option.create({
            id: question.options.length+1,
            title: req.body.title,
            question: question._id,
            votes:0
        })
        question.options.push(option);
        return res.status(200).send('Option created');
    }
    //else
    else{
        return res.status(404).send('Question not found');
    }
}

//delete a question
module.exports.delete = function (req,res) {

    const id = req.params.id;
    Question.findOneAndDelete({id:id}).exec(function(err){
        return res.status(404).send('Question not found');
    })
    return res.status(200).send('Question successfully deleted');

}