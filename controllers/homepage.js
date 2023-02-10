module.exports.homepage = function(req,res){
    const json = {
        "/questions":"To view all question",
        "/questions/create":" To create a question - use POST method and key 'title'" ,
        "/questions/:id/options/create":"To create option for a particular question - use POST method and key 'title'",
        "/options/:id/delete":"To delete a option using DELETE http method",
        "/options/:id/add_vote":"To add vote for an option - Use PATCH method",
        "/questions/:id":"To view a particular question"
    }
    return res.status(200).json(json);
}