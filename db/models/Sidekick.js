const mongoose = require('../connection')

const SidekickSchema = new mongoose.Schema({
    name: String,
    animal: Boolean,
    animaltype: String,
    powers: [{
      type: String
    }],
    villainMaster: [{
        type: Schema.Types.ObjectId,
        ref: 'Villain'
      }]
})

let sidekick = mongoose.model('Sidekick', SidekickSchema)

module.exports = sidekick