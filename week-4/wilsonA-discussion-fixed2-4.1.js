/*
============================================
; Title:  mclaughlin-discussion-week-4.js
; Author: Serena McLaughlin
; Date:   19 December 2018
; Modified by: Aaron Wilson
; Description: Fixing arrays
;===========================================
*/

//Header
const header = require('./header.js');

console.log(header.display('Aaron', 'Wilson', 'Discussion 4.1 fixed code'));
console.log("\n");

// Array - FIXED SYNTAX ERROR - the array is not () parentheses, but yet [] brackets to function.
let animals = ["Dog", "Cat", "Fox", "Fish", "Duck", "Frog"];

// FIXED - I fixed the animals array index to the proper numeral value to be able to output fox.
let featuredAnimal = animals[2];

// Output : FIXED - I redefined the output to reflect the featuredAnimal variable output to the console log.
console.log(featuredAnimal);
