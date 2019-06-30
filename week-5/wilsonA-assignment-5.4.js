/*
============================================
; Title:  wilsonA-assignment-5.4.js
; Author: Richard Krasso
; Date:   10 January 2019
; Modified By: Aaron Wilson
; Description: Advanced filtering of Object
; Collections.
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Assignment 5.4'));

// Create a collection of objects to use as a parameter in a function.
const composers = [
  {
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8
  },
  {
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10
  },
  {
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9
  },
  {
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6
  },
  {
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5
  }
];

// Map out the rating property from the original collection and insert it into a new smaller object for output.
const ratingMap = composers.map((mapOne) => {

  // Return a new object manipulated to the way it needs to be filtered for output.
  return {
      rating: mapOne.rating,
      composer: mapOne.lastName
  }
});

// Map out the genre property from the original collection and insert it into a new smaller object for output.
const genreMap = composers.map((mapTwo) => {

  // Return a new object manipulated to the way it needs to be filtered for output.
  return {
      genre: mapTwo.genre,
      composer: mapTwo.lastName
  }
});

// Create a ES5 function as a variable that passes two map variables as its parameters.
const filterComposers = (rating, genre) => {

  // Output to the console the rating header.
  console.log("-- COMPOSER BY RATING --");

  // Make a forEach loop to use the mapped variable to filter out it's newly created object properties.
  rating.forEach((comp) => {

    // Output to the console the rating property for each composer and their new composer property using string literals.
    console.log(`Rating: ${comp.rating} \nComposer: ${comp.composer}\n`);
  });

  // Output to the console the genre header.
  console.log('-- COMPOSER BY GENRE --');

  // Make a forEach loop to use the mapped variable to filter out it's newly created object properties.
  genre.forEach((comps) => {

    // Output to the console the genre property for each composer and their new composer property using string literals.
    console.log(`Genre: ${comps.genre} \nComposer: ${comps.composer}\n`);
  });
}

// Call the filterComposers variable as a function for output.
filterComposers(ratingMap ,genreMap);
