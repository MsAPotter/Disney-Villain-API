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
app.use('/sidekicks/', SidekickController)
app.use('/movies/', MovieController)

app.set("port", process.env.PORT || 3001)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
  })