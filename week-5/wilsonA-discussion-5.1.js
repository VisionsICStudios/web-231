/*
============================================
; Title:  wilsonA-discussion-5.1.js
; Author: Aaron Wilson
; Date:   10 January 2019
; Description: Keyed Collection w/ Errors.
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Discussion 5.1 w/ Errors'));

// Make a variable for the current year.
let curYear = 2019

// Create a blank keyed collection.
let years = new Map();

// Add these keys and values to the collection.
years.set('newYears', 2019);
years.set('lastYear', 2018);
years.set('past', 2008);

// Create a function that passes in the keyed collection.
function newYearGreeting(keyColl, year) {

  // Introduce a condition to look for the right year.
  if(keyColl.has('newYear') !== true) {

    // If the condition is not true, output this to the console.
    return console.log('Please! Are you still living in the Past?')

  } else {

    // Loop through the keyed collection.
    for (var [key, value] of keyColl) {

      // Create another condition in the for loop to look for the correct year.
      if(value === year) {

        // Extract to the console the appropriate greeting.
        console.log('Happy New Year ' + value + '!');
      }
    }
  }
}

// Call the newYearGreeting function for output.
newYearGreeting(year, curYear);
