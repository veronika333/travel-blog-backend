const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/comment.schema');

//get one comment
router.get('/:comment_id', (req, res) => {

})

module.exports = router;