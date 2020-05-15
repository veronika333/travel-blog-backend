const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/comment.schema');

//get all comments
router.get('/', (req, res) => {
    //returns an empty array
    res.json([])
});


//get one comment
router.get('/:comment_id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.comment_id);
        res.json(comment);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.post('/', async (req, res) => {
    // Finding an Experience based off it's ID.
    const foundExp = await Post.findById(req.params.id);
    // Creating a comment inside the specific Experience.
    const createdComment = new Comment({
        author: req.body.auth or,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
    });
    // save the comment
    const savedComment = await createdComment.save();
    // Now we want to push the createdComment to our schema
     try {
     const savedExperience = foundExp.comments.push({ createdComment });
     // save the Experience with comment and catch if there is an error
     savedExperience.save();
     res.status(201).json(savedComment);  
    } catch (err) {
        res.status(404).json({ message: err });
    }
});


module.exports = router;