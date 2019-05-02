// WORKS
// JSON
"movies": [{
    "title": "Sleeping Beauty"
  }],
  "sidekicks": [
    "Diablo"
  ],

// MODEL
movies: {
    title: String,
    // type: ObjectId,
    // ref: 'Movie'
  },
sidekicks: [{
    // type: ObjectId,
    title: String,
    // ref: 'Sidekick'
  }],

////////////////////////////  
////////////////////////////
//JSON

  "movies": [{
    "title": "Sleeping Beauty"
  }],
  "sidekicks": [{
    "name": "Diablo"
  }],

//MODEL
  movies: [{
    title: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
sidekicks: [{
    name: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sidekick'
  }],


////////////////////////////  
////////////////////////////

//MODEL
  var ObjectId = mongoose.Schema.Types.ObjectId;
  
  movies: [{
    title: String,
    _id: ObjectId
    ref: 'Movie'
  }],
sidekicks: [{
    name: String,
    _id: ObjectId,
    ref: 'Sidekick'
  }],


  ////////////////////////////  
////////////////////////////

  //JSON

  "movies": [{
    "title": "Sleeping Beauty"
  }],
  "sidekicks": [{
    "name": "Diablo"
  }],

//MODEL
  movies: [{
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]
  }],
sidekicks: [{
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    sidekicks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]
  }],




  //////////////////////// TRY 1ST
  // villain model
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]

  sidekicks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sidekick' }]

//sidekick model
  villainMaster: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]

// movie model
  mainVillain: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]


  // ==> ValidationError: Villain validation failed: movies: Cast to Array failed for value "[ { title: 'Sleeping Beauty' } ]" at path "movies", sidekicks: Cast to Array failed for value "[ 'Diablo' ]" at path "sidekicks"

  // ==> My interpretation: the String being pushed from the JSON is not being read
 // ==> My Solution: add a line for it to ingest the String

  //////////////////////// TRY 2nd

      // villain model
  movies: [
    { title: String },
    { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]

  sidekicks: [
    { name: String },
    { type: mongoose.Schema.Types.ObjectId, ref: 'Sidekick' }]

//sidekick model
villainMaster: [
  {villainMaster: String},
  { type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]

// movie model
mainVillain: [
  { mainVillain: String },
  { type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]

  // ==> ValidationError: Sidekick validation failed: villainMaster: Cast to Array failed for value "Maleficent" at path "villainMaster"

  // => My interpretation: I'm doing something wrong feeding my json data in to my model and "connecting" the two


  /////////////////////////
////////////////// TRY 3rD

const VillainSchema
movies: {
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
},
sidekicks: {
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  sidekicks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sidekick' }]
},

const MovieSchema
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    yearPublished: Number,
    mainVillain: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]
  }
  

const SidekickSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    animal: Boolean,
    animaltype: String,
    powers: [{
        type: String
    }],
    villainMaster:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Villain' }]
  })

  // ==> Result: ValidationError: Movie validation failed: mainVillain: Cast to Array failed for value "Maleficent" at path "mainVillain"

  // ==> Interpretation: Same error as before. Maybe I need to delete the json lines where I say -- "villainMaster": "Maleficent" -- thinking that that links the villain and sidekick
  // and let the models link them instead (ie without explicitly stating this sidekick has this villainmaster)
  // commented out those lines in the MODELS and deleted them in the JSONs



  // New Result: 
  // ==> MongooseError: document must have an _id before saving



  /// Change: commented out 2 lines in VIllain Model

  movies: {
    // _id: mongoose.Schema.Types.ObjectId,
    title: String,
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  },
  sidekicks: {
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    sidekicks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sidekick' }]
  },

  // New Result:  same error
  // ==> MongooseError: document must have an _id before saving


  // CHANGE 1:
  const MovieSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,

  const SidekickSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,


    // ==> RESULT: No errors with running node db/seed
    // HOWEVER, have empty arrays in the db
    // the Movies and Sidekicks data does not populate in the Villains portion of the collection

    // "_id" : ObjectId("5ccaf1e2b3265a1610ee8ea2"),
    // "movies" : {
    //   "movies" : [ ]
    // },
    // "sidekicks" : {
    //   "sidekicks" : [ ]
    // }

// ==> Solution: Change Villain Schema
// Although I think this is what I had originally:

const VillainSchema = new mongoose.Schema({
  
  movies: [{
    title: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  sidekicks: [{
    name: String,
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Sidekick'
  }]

// Result: Original Error
// ==> ValidationError: Villain validation failed: movies: Cast to Array failed 
// for value "[ { title: 'Sleeping Beauty' } ]" at path "movies", sidekicks: Cast to Array 
// failed for value "[ { name: 'Diablo' } ]" at path "sidekicks"




// VILLAIN MODEL CHANGE

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

// VILLAIN JSON REMAINS SAME

"movies": [{
  "title": "Sleeping Beauty"
}],
"sidekicks": [{
  "name": "Diablo"
}],


// RESULT: 
//  ValidationError: Villain validation failed: sidekicks: Cast to Array failed for value 
// "[ 'Flotsam Jetsam' ]" at path "sidekicks"