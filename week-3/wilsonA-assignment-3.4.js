/*
============================================
; Title:  Assignment 3.4
; Author: Professor Krasso
; Date:   16 December 2018
; Modified by: Aaron Wilson
; Description: Loops and if else statements.
;===========================================
*/

const header = require("./header.js");
console.log(header.display("Aaron", "Wilson", "Assignment 3.4"));
console.log("\n");

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awarded points.

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

// Create a variable and assign it a value between 1 and 10.
const matchOne = 8;

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Take the functions you wrote in exercise 3.2 (match, logMismatch and logMatch) and copy them to this week's assignment.
function match(compOne, compTwo) {
  if (compOne === compTwo) {
    return true;
  } else {
    return false;
  }
}

function logMatch(sampOne, sampTwo) {
  // Use the parameters as the values you display in the string message.
  return sampOne + " does match " + sampTwo + "!";
}

function logMismatch(paraOne, paraTwo) {
  // Use the parameters as the values you display in the string message.
  return paraOne + " does not match " + paraTwo + "!";
}

// Create a for loop with 10 iterations and inside the body of the for loop create a local variable and assign it a random number between 1 and 10 (use the randomNumber function I have provided in the starter code)

// If it is not obviously by now, you are basically wrapping a for loop around the work you did in exercise 3.2.  

// And, instead of using multiple if...else statements and test variables you will be using a for loop to generate the test variables and one if..else statement to check the generated values. 
for (let i = 0; i < 10; i++) {
  // During each iteration of the for loop the random number should be reassigned a new random value (this means the placement of the variable should be inside the for loop).
  const matchTwo = randomNumber();

  // Next, create an if...else statement and use the match function to test if the variable in step one matches the random number created in step 3.  
  if (match(matchOne, matchTwo) === true) {
    // For true, call the logMatch function using the same two values.  
    console.log(logMatch(matchOne, matchTwo));
  } else {
    // For false, call the logMismatch function using the same two values. 
    console.log(logMismatch(matchOne, matchTwo));
  }
}

// Run and test the program and make sure your output matches what I have in the starter code.

// Stage, commit, and push your code to GitHub. 