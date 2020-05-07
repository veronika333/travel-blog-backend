const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    story: String
})

// const PostSchema = mongoose.Schema({
//     title: String,
//     imageUrl: String,
//     author: String,
//     shortDesc: String,
//     location: String,
//     story: String
// })

module.exports = mongoose.model('Posts', PostSchema);