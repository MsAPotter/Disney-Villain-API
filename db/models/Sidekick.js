const mongoose = require('../connection')

const SidekickSchema = new mongoose.Schema({
    name: String,
    animal: Boolean,
    animaltype: String,
    powers: [{
      type: String
    }],
    // villainMaster: [{
    //     // type: mongoose.Schema.Types.ObjectId,
    //     type: String,
    //     ref: 'Villain'
    //   }]
})

let sidekick = mongoose.model('Sidekick', SidekickSchema)

module.exports = sidekick