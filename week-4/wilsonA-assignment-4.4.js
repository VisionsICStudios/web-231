/*
============================================
; Title:  wilsonA-assignment-4.4.js
; Author: Richard Krasso
; Date:   26 December 2018
; Modified by: Aaron Wilson
; Description: Predicates.
;===========================================
*/

// Header info.
const header = require('./header.js');

console.log(header.display('Aaron', 'Wilson', 'Assignment 4.4'));

// Instructions:

// Create a string array of 5 states.
const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada']

// Create a function called getState with two string parameters.
function getState(strOne, strTwo) {

  // In the body of the getState function add an if statement to test if the two string parameters match.  If they match, return true.
  if(strOne === strTwo) {

    // Output to the console the returned TRUE value.
    return console.log(strOne);
  }
}

// Build a cycleStates function that iterates through all the states parameter's values.
function cycleStates(sts) {

  // Out to the console the original iteration of the states array.
  console.log('-- ORIGINAL ARRAY --');

  // Created a for loop to iterate through the states array.
  for (let i = 0; i < sts.length; i++) {

    // Output to the console each value of the states array.
    console.log(sts[i]);
  }
}

// Build sortedArray function to take in an array as it's only parameter.
function sortedArray(array) {

  // Perform a built-in sort function on the passed in array parameter and store it as the alphabeticalStates variable.
  const alphabeticalStates = array.sort();

  // Output to the console the appropriate TRUE selected state value from the array.
  console.log('\n-- SORTED ARRAY --'); // Title head.

  // Create a for loop to cycle through the new array.
  for (let x = 0; x < alphabeticalStates.length; x++) {

    // Output to the console the iterations of the newly created alphabeticalStates array.
    console.log(alphabeticalStates[x]);
  }
}

// Build a selectedValue function to pass the states array and the getState function.
function selectedValue(array, funct) {

  console.log('\n-- SELECTED VALUE --'); // Title head.

  // Using JavaScript's built-in filter() function, call the getState function and pass-in the current element of the filter loop and the value.
  const filteredState = array.filter(function (state) {
    return funct(state, 'Iowa')
  });
}

// Run and test the program and make sure your output matches what I have in the starter code.

// Output to the console all the states in the states array that is passed as a parameter of cycleStates function.
cycleStates(states);

// Output to the console the sortedArray function that uses the built-in filter function.
sortedArray(states);

// Output to the console the appropriate TRUE selected state value from the states array.
selectedValue(states, getState);
// Stage, commit, and push your work to GitHub.
