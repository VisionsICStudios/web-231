/*
============================================
; Title:  wilsonA-exercise-4.2.js
; Author: Richard Krasso
; Date:   26 December 2018
; Modified by: Aaron Wilson
; Description: Arrays.
;===========================================
*/

// Header info.
const header = require('./header.js');

console.log(header.display('Aaron', 'Wilson', 'Exercise 4.2'));

/* Arrays are an integral part of any programming language and, in most cases, the ideal mechanism for storing,
; manipulating, and retrieving "in memory" data. Knowing how and when to use arrays in a JavaScript application
; will save you time and promote code scalability.
*/

// Create a string array of five (5) fruit items (order does not matter).
const fruitItems = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

// Create a function called getFruit with one parameter (an array)
function getFruit (array) {

  // In the body of the getFruit function iterate over the parameterized array (see step 2).
  // I used a for loop to control the iteration process.
  for (let i = 0; i < array.length; i++) {

    // Output the results using the console.log() function
    console.log(array[i]);
  }
}

// Run and test the program and make sure your output matches what I have in the starter code.

// Call the getFruit function and pass-in the array created in step 1 to test the results.
getFruit(fruitItems);

// Stage, commit, and push your work to GitHub.
