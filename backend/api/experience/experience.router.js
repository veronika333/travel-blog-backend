const express = require('express');
const router = express.Router();

const experienceList = require('../../data.json');

//get all experiences
router.get('/', (req, res) => {
    console.log('GET all experiences');

    res.json(experienceList);
})


module.exports = router;