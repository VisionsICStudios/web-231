/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Date:   16 December 2018
; Modified by: Aaron Wilson
; Description: Functions and if else statements.
;===========================================
*/

const header = require('./header.js');
console.log(header.display('Aaron', 'Wilson', 'Exercise 3.2'));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false.
function match(compOne, compTwo) {
  if (compOne === compTwo) {
    return true;
  } else {
    return false;
  }
}
// Create a function called logMatch with two parameters, create a string message with the two parameters saying they do match.
function logMatch(sampOne, sampTwo) {
  // Use the parameters as the values you display in the string message.
  return sampOne + " and " + sampTwo + " do match!";
}
// Create a function called logMismatch with two parameters, create a string message with the two parameters saying they do not match.
function logMismatch(paraOne, paraTwo) {
  // Use the parameters as the values you display in the string message.
  return paraOne + " and " + paraTwo + " do not match!";
}

function compareMatch(matchOne, matchTwo) {
  // Using if...else statements call the match function and pass-in two of the test variables.
  if (match(matchOne, matchTwo) === true) {
    // In the body of the "true" statement call the logMatch function and pass-in these same two variables.
    return logMatch(matchOne, matchTwo);
  } else {
    // In the body of the "false" statement call the logMismatch function and pass-in these same two variables.
    return logMismatch(matchOne, matchTwo);
  }
}

// Create six local test variables with default values.
const truck = "Truck";
const car = "Car";
let bikeOne = "Bike";
const bikeTwo = bikeOne;
const four = "Four";
const three = "Three";

// Run and test the program and make sure your output matches what I have in the starter code.
console.log(match(truck, car));
console.log(match(bikeOne, bikeTwo));
console.log("\n");
// Repeat this process until all 6 variables have been tested.
console.log(compareMatch(truck, car));
console.log(compareMatch(bikeOne, bikeTwo));
console.log(compareMatch(four, three));
// Stage, commit, and push your work to GitHub.
