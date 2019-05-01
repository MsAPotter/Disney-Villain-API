const mongoose = require('../connection')

const SidekickSchema = mongoose.Schema({
    name: String,
    animal: Boolean,
    animaltype: String,
    powers: String,
    villainMaster: [{
        type: Schema.Types.ObjectId,
        ref: 'Villain'
      }]
})

let sidekick = mongoose.model('Sidekick', SidekickSchema)

module.exports = sidekick