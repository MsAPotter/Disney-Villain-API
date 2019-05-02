const express = require("express")
const router = express.Router()


const Sidekick = require("../db/models/Sidekick")
const Villain = require("../db/models/Villain")


// List all sidekicks
router.get("/", (req, res) => {
    Sidekick.find({}).then(allsidekicks => res.json(allsidekicks))
  })







module.exports = router