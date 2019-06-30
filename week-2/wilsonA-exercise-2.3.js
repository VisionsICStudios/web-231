/*
============================================
; Title:  wilsonA-exercise-2.3.js
; Author: Professor Krasso
; Date:   08 December 2018
; Modified By: Aaron Wilson
; Description: Displays the header, the
; created function, and the output.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

const header = require("./header.js");

myName.aaron = "Aaron ";
myName.wilson = "Wilson";
const greeting = "Hello ";

function myName () {
  return myName.aaron + myName.wilson;
}

console.log(header.display("Aaron", "Wilson", "Exercise-2.3"));
console.log("\n" + greeting + myName() + "!");