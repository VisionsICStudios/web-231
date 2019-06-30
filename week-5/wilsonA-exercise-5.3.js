/*
============================================
; Title:  wilsonA-exercise-5.3.js
; Author: Richard Krasso
; Date:   10 January 2019
; Modified By: Aaron Wilson
; Description: Demonstrates how to create
; an object collection and output the
; contents.
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 5.3'));

// Create a variable to use as a parameter in a function for Header output.
let compHead = console.log('-- COMPOSERS --');

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

// Build a function to display the composers.
function callComposers(coll, header) {

  // Use the header parameter to pass in the compHead variable on output.
  header;

  // Create a forEach loop to iterate through the composers collection passed in as a parameter.
  coll.forEach((composer) => {
    console.log('Last Name: ' + composer.lastName + ',  Genre: ' + composer.genre + ', Rating: ' + composer.rating);
  });
}

// Output callComposers function.
callComposers(composers, compHead);
