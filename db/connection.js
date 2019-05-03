const mongoose = require('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV == "production") {
	mongoose.connect(process.env.DB_URL)
  } else {
	mongoose.connect("mmongodb://localhost/disney-villain")
  }



module.exports = mongoose