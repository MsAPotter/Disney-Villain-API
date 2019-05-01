const mongoose = require('../connection')

const MovieSchema = mongoose.Schema({
    title: String,
    yearPublished: Number,
    mainVillain: [{
        type: Schema.Types.ObjectId,
        ref: 'Villain'
      }]
})

let movie = mongoose.model('Movie', MovieSchema)

module.exports = movie