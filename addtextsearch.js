db.villains.createIndex( { keywords: "text"} )

db.villains.find( { $text: { $search: "java coffee shop" } } )


//// FIRST TRY

// Find gif by keyword
router.get("/:searchterms", (req, res) => {

    db.villains.createIndex( { keywords: "text"} )
  
    db.villains.find( { $text: { $search: "searchterms" } } )
  
        .then(google => res.json(google))
    })

    // ==>ReferenceError: db is not defined

///////////////////////////////
// SECOND TRY

router.get("/:searchterms", (req, res) => {

    Villain.createIndex( { keywords: "text"} )

    Villain.find( { $text: { $search: "searchterms" } } )

        .then(google => res.json(google))
    })



// ==> TypeError: Villain.createIndex is not a function

///////////////////////////////
// third try --> Put   Villain.createIndex( { keywords: "text"} )
// in differnet spots in the Villain Model

// ==> Result: Crashed program


///////////////////////////////
Controller
router.get("/:searchterms", (req, res) => {
    Villain.find( { $text: { $search: "searchterms" } } )
        .then(google => res.json(google))
    })

Seed File
Villain.find({}).deleteMany(() => {
    Villain.create(villainsjson);
    Villain.createIndex( { keywords: "text"} );
})

// ==> Result: MongoError: text index required for $text query


///////////////////////////////
// Added quotes to keywords:
Seed File
Villain.find({}).deleteMany(() => {
    Villain.create(villainsjson);
    Villain.createIndex( { "keywords": "text"} );
})

// ==> Result: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)



