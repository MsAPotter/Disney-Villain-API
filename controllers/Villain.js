const express = require("express")
const router = express.Router()

const Villain = require("../db/models/Villain")
const Sidekick = require("../db/models/Sidekick")
const Movie = require("../db/models/Movie")

// List all villains
router.get("/", (req, res) => {
    Villain.find({}).then(allvillains => res.json(allvillains))
  })

// List a single villain by name
router.get("/:name", (req, res) => {
    Villain.find({ name: req.params.name })
      .then(villain => res.json(villain))
  })

// List all gifs by villain
router.get("/:name/:gif", (req, res) => {
    Villain.find({ name: req.params.gif })
      .then(allgifs => res.json(allgifs))
  })










module.exports = router