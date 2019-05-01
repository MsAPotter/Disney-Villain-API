const express = require('express')
app = express()

const parser = require('body-parser')

const VillainController = require('./controllers/Villain')
const SidekickController = require('./controllers/Sidekick')
const MovieController = require('./controllers/Movie')


app.use(parser.urlencoded({extended: true}))    
app.use(parser.json())  


app.get('/', (req, res) => {
	res.redirect('/villains/')
})


app.use('/villains/', VillainController)
app.use('/sidekick/', SidekickController)
app.use('/movie/', MovieController)

app.listen(5000, () => {
    console.log("listening on port 5000")
})