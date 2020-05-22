//import the package
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();
const mongoose = require('mongoose');
const experienceRouter = require('./api/experience/experience.router');
const commentRouter = require('./api/comment/comment.router');
//const FRONTEND_ORIGIN = "http://localhost:3000";
const FRONTEND_ORIGIN = "https://travel-exp-app.herokuapp.com/";
// connect to DB
mongoose.connect('mongodb+srv://Veronika3:Veronika3@cluster0-av0yo.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true }, () => 
    console.log('Connected to DB')
);

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
//set comment router to use default route
app.use('/experience/:id/comment', commentRouter);

// // routes
// app.get('/', (req, res) => {
//     res.send('It is a home page');
// });

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});
