/*
============================================
; Title:  wilsonA-discussion-3.1.js
; Author: Aaron Wilson
; Date: 13 December 2018
; Modified By: N/A
; Description: Control statements with errors.
;===========================================
*/

/*  DIRECTIONS: ----------------------------------------
; The student attempting to fix this has to get this
; program to correctly output EACH number all the 
; way up to the correct "cap" parameter number then the
; return statement output as well.
;
; Find the mistakes to make the program run!
; -------------------------------------------------------
*/

// require method for the header output.
const header = require('./header.js');

// Output to the console the header display function.
console.log(header.display("Aaron", "Wilson", "Discussion-3.1"));

// Created a countUp function that will count up until the "cap" number is reached.
function countUp (cap) {
  const i = 0;
  // Create a for loop to iterate or count up. 
  for (var i = 0; i <= cap; i++) {
    // Create a conditional to compare the value of both variables "i" and "cap".
    if(i = cap) {
    console.log(cap);
    } else {
      console.log(i);
    }
  }
  // output dialog to let users know the cap is reached.
  return "=====================\n" + "Cap has been reached!";
}
// Create a variable called "counter" to store the "countUp" function.
const counter = countUp(157);
// Log to the console the output of the countUp function.
console.log(counter);