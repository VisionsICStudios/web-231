/*
============================================
; Title:  tarvin-discussion-5.1.js
; Author: David Tarvin
; Date:   08 January 2019
; Modified By: Aaron Wilson
; Description: Advanced Arrays ERROR FIX.
;===========================================
*/

// display header at beginning of program
const header = require('./header.js'); // Changed this to reflect my header file.
console.log(header.display('Aaron', 'Wilson', 'Discussion 5.1 (FIX)'));
// console.log(""); PREFERENCE: I commented this out to reduce the larger gap in spacing.

var coffees = [ // "{" SYNTAX ERROR: corrected with this "[ ".
  {
    coffeeType: 'New England',
    roastType: 'light brown'
  },
  {
    coffeeType: 'American',
    roastType: 'medium brown'
  },
  {
    coffeeType: 'Viennese',
    roastType: 'medium dark brown'
  },
  {
    coffeeType: 'Turkish',
    roastType: 'dark brown'
  },
  {
    coffeeType: 'Italian',
    roastType: 'very dark brown'
  },
  {
    coffeeType: 'French',
    roastType: 'black-brown'
  }
]; // "}" SYNTAX ERROR: corrected with this "] ". I also reformatted the collection.

console.log('-- Different types of coffee and their roast levels --\n'); // I added 2 hyphens  (--) and a line jump for a consistency preference.


// ORIGINAL CODE: coffees.forEach(coffee) => { SYNTAX ERROR: (missing first '(' curly brace) A ES5 function is to be passed as a parameter/argument to the forEach method.
coffees.forEach((coffee) => {
    // ORIGINAL CODE: console.log(coffee.coffeeType + ' is a type of ' + roastType + ' roast.'); IS NOT CORRECT.
    console.log(`${coffee.coffeeType} is a type of ${coffee.roastType} roast.`); // SYNTAX ERROR: missing the 'coffee' parameter & the '.' in front of roastType. PREFERENCE: string literal.
});
