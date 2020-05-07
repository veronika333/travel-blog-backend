const express = require("express");
const router = express.Router();

const experiences = require("../../data.json");

//dummydata handling
//will be removed when database added
const experienceList = [...experiences];
let index = 11;
const getId = () => index++;

//get all experiences
router.get("/", (req, res) => {
  console.log("GET all experiences");
  res.json(experienceList);
});

//get one experience
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(`GET one experience with id of ${id}`);

  const foundExperience = experienceList.find(
    (experience) => experience.id === id
  );
  console.log({ foundExperience });

  if (foundExperience) {
    res.json(foundExperience);
  } else {
    res.status(404).json({
      message: "Experience not found",
    });
  }
});

//create an experience
router.post("/", (req, res) => {
  console.log("create an experience");

  const userInput = req.body;

  const newExperience = {
    ...userInput,
    id: getId(),
  };

  if (newExperience) {
    console.log("new experience created:", newExperience);
    experienceList.push(newExperience);

    res.status(201).json(newExperience);
  } else {
    res.status(404).json({
      message: "Experience not created",
    });
  }
});

//update an experience
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(`update an experience with id of ${id}`);

  const updatedExperience = experienceList.find(
    (experience) => experience.id === id
  );

  if (updatedExperience) {
    Object.assign(updatedExperience, req.body, { id: updatedExperience.id });
    console.log("Experience updated", updatedExperience);
    res.json(updatedExperience);
  } else {
    res.status(404).json({
      message: "Experience not updated",
    });
  }
});

//delete an experience
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(`Delete experience with the id of ${id}`);

  // The deleting feature did not work correctly.
  // for example: delete id 5 = delete list[4] -> worked for the first delete
  // then if try to delete id 10, list[9] does not exist, because one element was deleted.
  let indexToBeDeleted = "";
  experienceList.forEach((element, index) => {
    if (element.id === id) {
      indexToBeDeleted = index;
    }
  });

  const deletedExperience = experienceList.splice(indexToBeDeleted, 1)[0];

  if (deletedExperience) {
    console.log("Delete successful", deletedExperience);
    res.json(deletedExperience);
  } else {
    res.status(204).json();
  }
});

module.exports = router;
