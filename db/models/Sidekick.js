const mongoose = require('../connection')

const SidekickSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,
  animal: Boolean,
  animaltype: String,
  powers: [{
      type: String
  }]
  // ,
  // villainMaster:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]
})

let sidekick = mongoose.model('Sidekick', SidekickSchema)

module.exports = sidekick