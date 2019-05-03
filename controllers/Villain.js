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
  Villain.find({ "name": req.params.name })
    .then(villain => res.json(villain))
})


// Find a villain's quotes array
router.get("/:name/quotes", (req, res) => {
  Villain.findOne({ name: req.params.name })
    .then(villain => res.json(villain.quotes))
})


// Find a villain's first url (for gif)
router.get("/:name/url", (req, res) => {
  Villain.findOne({ name: req.params.name })
    .then(villain => res.json(villain.gifs[0].url))
})


////////////////////////////////////// ATTEMPT TO FIND BY KEYWORD

// Find all gifs based on keyword
// router.get("/:name/:gifs/:keywords", (req, res) => {
//     Villain.find({ keywords: req.params.gifs.keywords})
//       .then(allgifs => res.json(allgifs))
//       // console.log(villainsjson[0].gifs[0].keywords[0]) // get first keyword
//   })

// villainsjson[0].gifs[0].keywords[0]

//////////////////////////////////////
//////////////////////////////////////  ATTEMPT TO USE $FIND IN MONGGOSE TO SEARCH BY KEYWORD
////////////////////////////////////// 

// router.get("/:searchterms", (req, res) => {

//   Villain.find( { $text: { $search: "searchterms" } } )

//       .then(google => res.json(google))
//   })
//////////////////////////////////////
//////////////////////////////////////


//Create a villain
router.post("/", (req, res) => {

  Villain.create(req.body).then(villain =>{
      console.log(villain)
      res.json(villain)
  })
})

// Update
router.put('/:id', (req,res) => {
  Villain.findOneAndUpdate({_id: req.params.id}, req.body)  
  .then(updated => {
      res.json(updated)
  })
})

// Delete
router.delete("/delete/:id", (req, res) => {
  Villain.deleteOne({_id: req.params.id})
  .then(deleted => {
      console.log(deleted)
      res.json(deleted)
  })
})



module.exports = router