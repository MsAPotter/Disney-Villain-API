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


## Installation Instructions

## How to fork a repository
Find the link on GitHub 

In the top right, below the plus-sign we used to create a new repository, there is a "Fork" button - click it. Forking

A modal may pop up with the title, "Where should we fork this repository?". If it does, click on your github.com username (not the enterprise github, if they're different).

If everything works, you'll see a screen that has a book with a fork in it being scanned.

You'll then be sent to a page that looks like the one you were just on for your own repo. Take a close look at the heading in the top left: it should have your username and then the name of the repository and underneath that something like, "forked from <your_partners_uesername>/<the_name_of_the_repo>"


## Cloning 

Now that you've forked the repository, you need some way to get it on to your computer (locally). This process is called cloning

How to clone a repository
From the repo page for the fork of my repository (where we left off in the previous step), find the green button that says "Clone or Download".

Copy the link by highlighting it and hitting cmd + C or clicking on the clipboard button next to the link. clone or download

Open up a new terminal window and navigate to your sandbox directory

The command to clone a repository with git is git clone <url_for_the_repo_you_want_to_clone>. You can optionally pass in a name for the repository if you would like to name the working directory when you clone

don't worry about that right now though.
Change in to your new directory and run git log to see the commit history.