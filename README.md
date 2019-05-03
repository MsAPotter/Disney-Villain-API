## Project Summary

Disney Villain API where each Villain has a list of properties to include:
name, aliases, powers, accoutrements (i.e. magic staff), their feature song, a list of quotes, the movie they are in, their main sidekicks, and gifs (with associated keywords).

The user can search:
all Villains, Sidekicks, and Movies
a single villain by name (and pull up their stats)
a random quote from a specific Villain


## Technologies Used

MongoDB
Express
Mongoose
Body-Parser


## Approach

Created 3 JSON files: one for the Villain with emoty arrays for the sidekicks and movies key values, one JSON file for the sidekicks and one for the movies the Villain is associated with.

In the Villain model, the sidekicks and movies are Referenced, so that that information is added during the seeding process.


## Features

Returns a random quote from a specific Villain,, specified by the User

## Limitations

Each Villain can only be associated with one sidekick (versus multiple) and one movie. For example, in the case of Ursula, her main sidekicks are Flotsam and Jetsam, but are combined into one entity in the sidekicks JSON. 
--> Unsolved problem: Ability to create a varying number of sidekicks and movies depending on how many each Villain is associated with


## Installation Notes

NPM install express, mongoose, body-parser

