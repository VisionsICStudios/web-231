/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso
; Date:   16 December 2018
; Modified by: Aaron Wilson
; Description: Replace If-Else w/ Switch.
;===========================================
*/

const header = require("./header.js");
console.log(header.display("Aaron", "Wilson", "Exercise 3.3"));
console.log("\n");

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

 
// Run and test the program and make sure your output matches what I have in the starter code. 
// When you are happy with the output stage, commit, and push your work to GitHub 

let eventKeyCode = 13

/*
if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
*/

// Replace the series of if...else statements with a switch block.
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
  break;
  case 16:
    console.log('The shift key was pressed.');
  break;
  case 32:
    console.log('The spacebar key was pressed.');
  break;
  case 8:
    console.log('The backspace / delete key was pressed.');
  break;
  default:
  console.log('Unrecognized key.');
  break;
}