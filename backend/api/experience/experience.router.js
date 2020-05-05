const express = require('express');
const router = express.Router();

const experienceList = require('../../data.json');

//get all experiences
router.get('/', (req, res) => {
    console.log('GET all experiences');

    res.json(experienceList);
})

//get one experience
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(`GET one experience with id of ${id}`);

    const foundExperience = experienceList.find(experience => experience.id === id);
    console.log({ foundExperience })

    if (foundExperience) {
        res.json(foundExperience);
    } else {
        res
            .status(404)
            .json({
                message: "Experience not found"
            });
    }
})

module.exports = router;