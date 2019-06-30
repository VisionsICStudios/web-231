/*
============================================
; Title:  wilsonA-exercise-5.2.js
; Author: Richard Krasso
; Date:   10 January 2019
; Modified By: Aaron Wilson
; Description: ES5 Built-in Functions.
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 5.2'));

// Build an array of meals.
const meals = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

// Create a function that passes in an array as its parameter.
function serveMeals(array) {
  // Build the ES5 function  as the output.
  array.forEach((meal) => {
    // Output the parameter to the console.
    console.log(meal);
  });
}

// Call the function to the console as the output.
serveMeals(meals);
