const express = require('express');
const experienceRouter = require('./api/experience/experience.router');
var mongoose = require('mongoose');

const app = express();

app.use('/experience', experienceRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(8000, function(){
    console.log('listening on port 8000');
});