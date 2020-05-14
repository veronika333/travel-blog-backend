const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/comment.schema');

//get one comment
router.get('/:comment_id', async (req, res) => {
    try{
    const comments = await Comment.findById(req.params.id);
    res.json(comments);
} catch(err){
    res.status(404).json({message:err});
}
});

router.comment('/experience/:id/comment', async (req, res) => {
    const comment = new Comment ({
        _id: new mongoose.Types.ObjectId(),
        author: req.body.author,
        content: req.body.content,
        date: req.body.date,
        imageUrl: req.body.imageUrl,
    });
    
    // save the comment and catch if there is an error
    try{
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
    } catch(err) {
    res.status(404).json({ message: err });
    }
    });

module.exports = router;