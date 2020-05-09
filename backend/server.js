const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
var mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, function(){
    console.log('listening on port');
});