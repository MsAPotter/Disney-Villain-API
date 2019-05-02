const mongoose = require('../connection')

const MovieSchema = new mongoose.Schema({
    title: String,
    yearPublished: Number
})


let movie = mongoose.model('Movie', MovieSchema)

module.exports = movie