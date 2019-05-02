const mongoose = require('./connection')

const villainsjson = require('./jsons/villains.json')
const sidekicksjson = require('./jsons/sidekicks.json')
const moviesjson = require('./jsons/movies.json')

const Villain = require('./models/Villain')
const Sidekick = require('./models/Sidekick')
const Movie = require('./models/Movie')

// remove everything
// then start loop
// for each item in seedfile
// create villain
// create sidekick
// create movie
// push movie into villain
// push sidekick into villain
// save villain

Villain.find({}).deleteMany({}).then(() => {
    console.log('deleted all villains')
    Sidekick.deleteMany({}).then(() => {
      console.log('deleted all sidekicks')
        Movie.deleteMany({}).then(() => {
            console.log('deleted all movies')

 
    Villain.create(villainsjson).then((newVillain) => {
        console.log(newVillain)


        Sidekick.create(sidekicksjson)
        .then((newSidekick) => {
            console.log(newSidekick)

            Movie.create(moviesjson)
                .then((newMovie) => {
                    for (var i=0; i < villainsjson.length; i++) {
                    console.log(newMovie)
                    newVillain[i].movies.push(newMovie[i]._id)
                    newVillain[i].sidekicks.push(newSidekick[i]._id)
                    newVillain[i].save()
                    }
                })
        })
    }) 


})
    })
})
