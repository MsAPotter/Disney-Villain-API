const mongoose = require('../connection')

const VillainSchema = new mongoose.Schema({
    name: String,
    aliases: [{
      type: String
    }],
    powers: [{
      type: String
    }],
    accoutrements: String,
    song: String,
    // quotes: { String, String }, ///  OR LIKE THIS?
    quotes:[{
      type: String
    }],
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
