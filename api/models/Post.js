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
        required: true,
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
    story: String,
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
})

module.exports = mongoose.model('Posts', PostSchema);