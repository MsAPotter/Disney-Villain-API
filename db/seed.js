const mongoose = require('./connection')

const villainsjson = require('./jsons/villains.json')
const sidekicksjson = require('./jsons/sidekicks.json')
const moviesjson = require('./jsons/movies.json')

const Villain = require('./models/Villain')
const Sidekick = require('./models/Sidekick')
const Movie = require('./models/Movie')



Villain.find({}).deleteMany({}).then(() => {        // remove everything
    console.log('deleted all villains')
    Sidekick.deleteMany({}).then(() => {
      console.log('deleted all sidekicks')
        Movie.deleteMany({}).then(() => {
            console.log('deleted all movies')

 
    Villain.create(villainsjson).then((newVillain) => {     // create villain
        console.log(newVillain)


        Sidekick.create(sidekicksjson)                     // create sidekick
        .then((newSidekick) => {
            console.log(newSidekick)

            Movie.create(moviesjson)                        // create movie
                .then((newMovie) => {
                    for (var i=0; i < villainsjson.length; i++) {
                    console.log(newMovie)
                    newVillain[i].movies.push(newMovie[i]._id)          // push movie into villain
                    newVillain[i].sidekicks.push(newSidekick[i]._id)    // push sidekick into villain
                    newVillain[i].save()                                // save villain
                    }
                })
        })
    }) 


})
    })
})
