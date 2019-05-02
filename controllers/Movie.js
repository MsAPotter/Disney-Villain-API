const express = require("express")
const router = express.Router()

const Movie = require("../db/models/Movie")
const Villain = require("../db/models/Villain")


// List all movies
router.get("/", (req, res) => {
    Movie.find({}).then(allmovies => res.json(allmovies))
  })

// List a movie by title
router.get("/:title", (req, res) => {
  Movie.findOne({ "title": req.params.title })
    .then(movietitle => res.json(movietitle))
})

// Create
router.post("/", (req, res) => {
  console.log(req.body)
  Movie.create(req.body).then(created => {
      res.json(created)
  })
  res.json(req.body)
})

// Update
router.put('/update/:id', (req,res) => {
  Movie.findOneAndUpdate({_id: req.params.id}, req.body)  
  .then(updated => {
      res.json(updated)
  })
})

// Delete
router.delete("/delete/:id", (req, res) => {
  Movie.deleteOne({_id: req.params.id})
  .then(deleted => {
      console.log(deleted)
      res.json(deleted)
  })
})

module.exports = router