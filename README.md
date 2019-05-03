## Project Idea and Initial Planning

Build a Disney Villain (animated) API. And the main feature will be the user can search by keyword and pull up a gif related to that keyword.


## Technologies Used

MongoDB
Express
Mongoose
Body-Parser


## Approach

Created 3 JSON files: one for the Villain with emoty arrays for the sidekicks and movies key values, one JSON file for the sidekicks and one for the movies the Villain is associated with.

In the Villain model, the sidekicks and movies are Referenced, so that that information is added during the seeding process.


## Features



## Limitations

Each Villain can only be associated with one sidekick (versus multiple) and one movie. For example, in the case of Ursula, her main sidekicks are Flotsam and Jetsam, but are combined into one entity in the sidekicks JSON. 
--> Unsolved problem: Ability to create a varying number of sidekicks and movies depending on how many each Villain is associated with


## Installation Notes

NPM install express, mongoose, body-parser

