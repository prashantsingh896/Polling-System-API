const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./config/mongoose');

//route all req to routes
app.use('/', require('./routes'));

app.listen(PORT, function(){
    console.log('Server listening on port: ',PORT);
});