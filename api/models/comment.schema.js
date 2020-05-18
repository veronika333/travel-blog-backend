const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageUrl: String
})

// how the Schema creates a comment, this contains all the Schema data from above..
module.exports = mongoose.model('Comment', CommentSchema);