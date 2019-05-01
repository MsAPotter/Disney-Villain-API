const mongoose = require('../connection')

const VillainSchema = mongoose.Schema({
    name: String,
    aliases: String,
    powers: String,
    accoutrements: String,
    song: String,
    quotes: { String, String },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
      }],
    sidekicks: [{
        type: Schema.Types.ObjectId,
        ref: 'Sidekick'
      }],
    gifs: [{
        url: String,
        keywords: String
      },
      {
        url: String,
        keywords: String
      },
      {
        url: String,
        keywords: String
      }]

})

let villain = mongoose.model('Villain', VillainSchema)

module.exports = villain
