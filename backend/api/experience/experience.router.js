const express = require("express");
const router = express.Router();
const Experience = require("../../models/Experience");
//const experiences = require('../../data.json');

//dummydata handling
//will be removed when database added
// const experienceList = [...experiences];
// let index = 11;
// const getId = () => index++;

//Anne's code below:
//get all experiences
// router.get('/', (req, res) => {
//     console.log('GET all experiences');
//     res.json(experienceList);
// })

//Veronika's code below:
//get all experiences
router.get("/", async (req, res) => {
  try {
    // return all the experiences or can make a limit
    const posts = await Experience.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//get one experience
// router.get('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     console.log(`GET one experience with id of ${id}`);

//     const foundExperience = experienceList.find(experience => experience.id === id);
//     console.log({ foundExperience })

//     if (foundExperience) {
//         res.json(foundExperience);
//     } else {
//         res
//             .status(404)
//             .json({
//                 message: "Experience not found"
//             });
//     }
// })

//Veronika's code below to get one experience from DB
router.get("/:id", async (req, res) => {
  try {
    const foundExperience = Experience.findById(req.params.id);
    res.json(foundExperience);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

// //Anne's code below
// //create an experience
// router.post('/', (req, res) => {
//     console.log('create an experience');

//     const userInput = req.body;

//     const newExperience = {
//         ...userInput,
//         id: getId()
//     }

//     if (newExperience) {
//         console.log('new experience created:', newExperience);
//         experienceList.push(newExperience);

//         res
//             .status(201)
//             .json(newExperience)
//     } else {
//         res
//             .status(404)
//             .json({
//                 message: "Experience not created"
//             })
//     }
// });

//Veronika's code below. Create an experience
router.post('/', (req, res) => {
    const newExperience = new Experience({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
    author: req.body.author,
    shortDesc: req.body.shortDesc,
    location: req.body.location,
    story: req.body.story
    })
    newExperience.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

// router.post("/", async (req, res) => {
//   // const {body} = req
//   ({
//     title: req.body.title,
//     imageUrl: req.body.imageUrl,
//     author: req.body.author,
//     shortDesc: req.body.shortDesc,
//     location: req.body.location,
//     story: req.body.story,
//   });

//   newExperience.save()
//   .then((data) => {
//     console.log(`Saved new experience to database: ${data}`);
// })
// .catch((err) => {
// console.log(`An error has occured when adding new experience: ${err}`);
// });
  // // save the post and catch if there is an error
//   try {
//     const savedExperience = await newExperience.save();
//     res.json(savedExperience);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// //update an experience
// router.patch('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     console.log(`update an experience with id of ${id}`);

//     const updatedExperience = experienceList.find(experience => experience.id === id);

//     if (updatedExperience) {
//         Object.assign(updatedExperience, req.body, { id: updatedExperience.id });
//         console.log('Experience updated', updatedExperience);
//         res.json(updatedExperience);
//     } else {
//         res
//             .status(404)
//             .json({
//                 message: "Experience not updated"
//             })
//     }
// })

// //delete an experience
// router.delete('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     console.log(`Delete experience with the id of ${id}`);

//     const deleteIndex = experienceList.indexOf(id);
//     const deletedExperiences = experienceList.splice(deleteIndex, 1);
//     const deletedExperience = deletedExperiences[0];

//     if (deletedExperience) {
//         console.log('Delete successful', deletedExperience);
//         res.json(deletedExperience);
//     } else {
//         res
//             .status(204)
//             .json()
//     }
// })

module.exports = router;
