const mongoose = require('../connection')

// var ObjectId = mongoose.Schema.Types.ObjectId;

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
    quotes:[{
      type: String
    }],
    movies: [
      { title: String },
      { type: mongoose.Schema.Types.ObjectId },
      { ref: 'Movie' }
    ],
    sidekicks: [
      { name: String },
      { type: mongoose.Schema.Types.ObjectId }, 
      { ref: 'Sidekick' }
    ],
    gifs: [{     
        url: String,
        keywords: [{ type: String }]
      }]

 

})

let Villain = mongoose.model('Villain', VillainSchema)

module.exports = Villain
