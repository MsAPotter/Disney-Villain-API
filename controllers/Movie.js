const express = require("express")
const router = express.Router()

const Movie = require("../db/models/Movie")
const Villain = require("../db/models/Villain")


// List all movies
router.get("/", (req, res) => {
    Movie.find({}).then(allmovies => res.json(allmovies))
  })







module.exports = router