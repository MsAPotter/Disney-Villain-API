const mongoose = require('./connection')

const Villain = require('./models/Villain')
const Sidekick = require('./models/Sidekick')
const Movie = require('./models/Movie')

const villainsjson = require('./jsons/villains.json')
const sidekicksjson = require('./jsons/sidekicks.json')
const moviesjson = require('./jsons/movies.json')


Villain.find({}).deleteMany(() => {
    Villain.create(villains)
})
Sidekick.find({}).deleteMany(() => {
    Sidekick.create(sidekicks)
})
