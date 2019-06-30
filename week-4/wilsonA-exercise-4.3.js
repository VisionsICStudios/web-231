/*
============================================
; Title:  wilsonA-exercise-4.3.js
; Author: Richard Krasso
; Date:   26 December 2018
; Modified by: Aaron Wilson
; Description: Filtering.
;===========================================
*/

// Header info.
const header = require('./header.js');

console.log(header.display('Aaron', 'Wilson', 'Exercise 4.3'));

/* Adding and iterating over values in an array is extremely useful; however,
; to harness the full power of an array, one must be able to filter and select
; specific values in large data sets. Several options exist for filtering arrays
; and in this exercise we will use conditionals to determine the equality of an
; array value.
*/

// Instructions:

// Create a string array of 5 vehicles.
const vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

// I created a function that performs a simple cycle iteration through the desired array as its parameter.
function cycleVehicles(array) {

  // The first test runs the getValue function without a second parameter to strictly cycle through the vehicles array.
  console.log('-- DISPLAYING ARRAY ITEMS --');
  // Use a simple for loop to handle the iteration process.
  for (let i = 0; i < array.length; i++) {

    // Output to the console the iteration cycle of the vehicles.
    console.log(array[i]);
  }
}

// Create a function called getValue with two parameters: an array and a string value.
function getValue(array, str) {

  console.log('\n-- SELECTED VALUE --');
  // In the body of the getValue function, iterate over the parameterized array.
  for (let i = 0; i < array.length; i++) {

    // In the body of the for loop add an if statement and use the second parameter (see step 2)
    // To test if the string value matches the current value in the loop.
    if(array[i] === str) {

      // Finally, use the console.log() function to output the matching value.
      console.log(array[i]);
    }
  }
}

// Run and test the program and make sure your output matches what I have in the starter code.
cycleVehicles(vehicles);

// The second test outputs to the console the requested vehicles array value.
getValue(vehicles, 'Motorcycle');

// The second test outputs to the console the requested vehicles array value.
getValue(vehicles, 'Bus');

// Stage, commit, and push your work to GitHub.
