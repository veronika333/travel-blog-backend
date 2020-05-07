const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');

//get back the list of all posts
router.get('/', async (req, res) => {
    try{
        // return all the posts or can make a limit
const posts = await Post.find();
res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});

//get back 

//create a new post with the model Post and submit
router.post('/', async (req, res) => {
const post = new Post({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    author: req.body.author,
    shortDesc: req.body.shortDesc,
    location: req.body.location,
    story: req.body.story
});

// save the post and catch if there is an error
try{
const savedPost = await post.save();
res.json(savedPost);
} catch(err) {
res.json({ message: err });
}
});

//get back a specific post, so we can delete or update the post
router.get('/:postId', async (req, res) => {
   try{
    const post = Post.findById(req.params.postId);
   res.json(post);
} catch(err){
    res.json({message:err});
}
});


// router.get('/specific', (req, res) => {
// res.send('Specific post');
// });

module.exports = router;