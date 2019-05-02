const mongoose = require('./connection')

const villainsjson = require('./jsons/villains.json')
const sidekicksjson = require('./jsons/sidekicks.json')
const moviesjson = require('./jsons/movies.json')

const Villain = require('./models/Villain')
const Sidekick = require('./models/Sidekick')
const Movie = require('./models/Movie')


// Villain.find({}).deleteMany(() => {
//     Villain.create(villains)
// })
// Sidekick.find({}).deleteMany(() => {
//     Sidekick.create(sidekicks)
// })
// Movie.find({}).deleteMany(() => {
//     Movie.create(movies)
// })

Villain.deleteMany({}).then(() =>{
    console.log('deleted all villains')
    Villain.create(villainsjson)
        .then(villain => {
            // console.log(villainsjson)
            console.log(villainsjson[0])    // gets Maleficent populated with full gifs array
            console.log(villainsjson[0].gifs[0].url)          // gets first URL
            console.log(villainsjson[0].gifs[0].keywords[0]) // get first keyword
        })
        .then(sidekick => {
            Sidekick.create(sidekicksjson)
            console.log(sidekicksjson)
        })
        // .then(whatever => {
        //     console.log(whatever)
        //     villain.sidekicks.push(whatever)
        //     villain.save()
        //     console.log(whatever)
        // })
        

            // .then(sidekickname => {
            //     villainsjson.sidekicksjson.push(sidekickname)
            //     villainsjson.save()
            //     console.log("associated Sidekick with Villain")
            // })
            .catch(err => {
                console.log(err)
            })

        })



// Villain.deleteMany({}).then(() => {
//     console.log('deleted all villains')
//     Sidekick.deleteMany({}).then(() => {
//       console.log('deleted all sidekicks')
//       Movie.deleteMany({}).then(() => {
//         console.log('deleted all movies')

//     Villain.create(villainsjson)
//     .then(sidekicksjson => {
//         Sidekick.create({
//             villainMaster: villain.id
//         })
//         .then(side => {
//             villain.sidekicks.push(side)
//             villain.save()
//         })
//     .then(moviesjson => {
//         Movie.create({
//             mainVillain: villain.id
//         })
//         .then(side => {
//             villain.movies.push(side)
//             villain.save()
//         })
//         })
//     })
//       })
//     })
// })

  