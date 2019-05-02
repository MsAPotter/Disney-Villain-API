const express = require("express")
const router = express.Router()


const Sidekick = require("../db/models/Sidekick")
const Villain = require("../db/models/Villain")


// List all sidekicks
router.get("/", (req, res) => {
    Sidekick.find({}).then(allsidekicks => res.json(allsidekicks))
  })

//  Get sidekick by name
router.get("/:name", (req, res) => {
  Sidekick.find({ name: req.params.name })
    .then(sidekick => res.json(sidekick))
})
  

// Create
router.post("/", (req, res) => {
  console.log(req.body)
  Sidekick.create(req.body).then(created => {
      res.json(created)
  })
  res.json(req.body)
})

// Update
router.put('/update/:id', (req,res) => {
  Sidekick.findOneAndUpdate({_id: req.params.id}, req.body)  
  .then(updated => {
      res.json(updated)
  })
})

// Delete
router.delete("/delete/:id", (req, res) => {
  Sidekick.deleteOne({_id: req.params.id})
  .then(deleted => {
      console.log(deleted)
      res.json(deleted)
  })
})






module.exports = router