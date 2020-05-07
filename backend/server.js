const express = require('express');
const experienceRouter = require('./api/experience/experience.router');
const mongoose = require('mongoose');

const FRONTEND_ORIGIN = "http://localhost:3000";

const app = express();

//allow chrome to do ajax call
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

//parse json bodies
app.use(express.json());
//set experience router to use default route
app.use('/experience', experienceRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(8000, function(){
    console.log('listening on port 8000');
});