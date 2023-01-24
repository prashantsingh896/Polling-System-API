const express = require('express');
const app = express();
const PORT = 8000;


app.get('/',function(req,res){
    res.end('Hey there!');
})

app.listen(PORT, function(){
    console.log('Server listening on port: ',PORT);
});