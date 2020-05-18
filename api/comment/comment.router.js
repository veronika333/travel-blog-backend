const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/comment.schema');

//get all comments
router.get('/', async (req, res) => {
    try {
        // return all the comments or can make a limit
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});


//get one comment
router.get('/:comment_id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.comment_id);
        // .populate('comments');
        res.json(comment);
        console.log(comment);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});


// creates a new comment under an Experience-post.
router.post('/', async (req, res) => {
    // Finding an Experience based off it's ID.
    const foundExp = await Post.findById(req.params.id);
    // Creating a comment inside the specific Experience.
    const createdComment = new Comment({
        author: req.body.author,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
    });
    // save the comment
    const savedComment = await createdComment.save();
    console.log(savedComment);
    try {
        // Now we want to push the createdComment to our schema
        const savedExperience = foundExp.comments.push({ createdComment });
        // save the Experience with comment and catch if there is an error
        await savedExperience.save();
        res.status(201).json(savedComment);
        console.log(savedExperience);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});


module.exports = router;