const express = require("express")
const router = express.Router()


const Sidekick = require("../db/models/Sidekick")
const Villain = require("../db/models/Villain")


// List all sidekicks
router.get("/", (req, res) => {
    Sidekick.find({}).then(allsidekicks => res.json(allsidekicks))
  })

//  Get sidekick by ID
router.get("/:id", (req, res) => {
  Sidekick.find({ id: req.params._id })
    .then(sidekick => res.json(sidekick))
})
  







module.exports = router