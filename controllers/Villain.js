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
// router.get("/:name", (req, res) => {
//   Villain.find({ "name": req.params.name })
//     .then(villain => res.json(villain))
// })

// Find gif by keyword
router.get("/:searchterms", (req, res) => {

  Villain.find( { $text: { $search: "searchterms" } } )

      .then(google => res.json(google))
  })

// Find all gifs based on keyword
// router.get("/:name/:gifs/:keywords", (req, res) => {
//     Villain.find({ keywords: req.params.gifs.keywords})
//       .then(allgifs => res.json(allgifs))
//       // console.log(villainsjson[0].gifs[0].keywords[0]) // get first keyword
//   })

// villainsjson[0].gifs[0].keywords[0]






module.exports = router