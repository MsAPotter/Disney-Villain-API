const mongoose = require('../connection')

const MovieSchema = new mongoose.Schema({
    title: String,
    yearPublished: Number,
    mainVillain: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Villain'
      }]
})

let movie = mongoose.model('Movie', MovieSchema)

module.exports = movie