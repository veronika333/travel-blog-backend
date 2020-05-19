const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/comment.schema");

//veronika's code get all experiences
router.get("/", async (req, res) => {
  try {
    // return all the posts or can make a limit
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//get one experience
// Experience-posts with comments.
// Using .populate() to get Experiences with comments.
router.get("/:id", async (req, res) => {
  try {
    const post = await (await Post.findById(req.params.id))
      .populated("comments")
      .exec((error, comment) => console.log(error));
    res.json(post);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

//create a new post with the model Post and submit
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    author: req.body.author,
    shortDesc: req.body.shortDesc,
    location: req.body.location,
    story: req.body.story,
  });

  // save the post and catch if there is an error
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

//delete experience
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    //res.json({ message: err });
    res.status(204).json({ message: err });
  }
});

//Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          imageUrl: req.body.imageUrl,
          author: req.body.author,
          location: req.body.location,
          date: req.body.date,
          story: req.body.story,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    //res.json({ message: err });
    res.status(404).json({ message: err });
  }
});

module.exports = router;
