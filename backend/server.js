//import the package
const express = require('express');
//excecute the package
const app = express();
//import mongoose
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//every time when we make request, we want to make sure that it uses body-parser
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');
//middleware: every time it goes to posts, please use postsRoute
app.use('/posts', postsRoute);

// routes
app.get('/', (req, res) => {
    res.send('It is a home page');
});
// app.get('/posts', (req, res) => {
//     res.send('Here we get the posts');
// });

// connect to DB
mongoose.connect('mongodb+srv://Veronika3:Veronika3@cluster0-av0yo.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true }, () => 
    console.log('Connected to DB')
);

// listening to the server
app.listen(8000, function(){
    console.log('listening on port 8000');
});