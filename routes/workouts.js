const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Under Construction: Getting all Workouts!"})
})


router.get('/:id', (req, res) => {
  res.json({ message: `Under Construction: Getting Workout '${req.params.id}'`})
})

router.post('/', (req,res) => {
  res.json({ message: "Under Construction: Adding a new Workout"})
})

router.put('/:id', (req,res) => {
  res.json({ message: `Under Construction: Updating the Workout with the ID '${req.params.id}'`})
})

router.delete('/:id', (req,res) => {
  res.json({ message: `Under Construction: Deleting the Workout with the ID '${req.params.id}'`})
})

module.exports = router;