/*
============================================
; Title:  wilsonA-assignment-2.4.js
; Author: Professor Krasso
; Date: 09 December 2018
; Modified By: Aaron Wilson
; Description: Understanding and building
; functions.
;===========================================
*/

/*

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

// require method for the header output.
const header = require('./header.js');

// Output to the console the header display function.
console.log(header.display("Aaron", "Wilson", "Exercise-2.4"));

// Create a function called fullName with two parameters (first and last name) and a return the two parameters as one string.
function fullName (first, last) {
  return first + " " + last;
}

// Create a function called dateWriter with three parameters (year, month, and day) and return a new date using the passed-in values.
function dateWriter (year, month, day) {
  const date = new Date (year, month, day);
  return date.toLocaleDateString();
}

// Create a function called formatNumber with two parameters (number and numOfFixedPositions) and return the number with the number of fixed positions you specified in the second parameter.
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

// Create a function called convertToInt with one string parameter. Parse the string parameter and return the value as an integer.
function convertToInt (string) {
  return parseInt(string);
}

// Create a function called convertToFloat with one string parameter. Parse the string parameter and return the value as a float.
function convertToFloat (string) {
  return parseFloat(string);
}

// Make test variables to ensure functionality.
const myName = fullName("Aaron", "Wilson");
const currentDate = dateWriter(2018, 11, 9);
const currentTemp = formatNumber(37, 4);
const myAge = convertToInt("47");
const savingsGoal = convertToFloat("1000000");

// Concatenate it all together to produce the appropriate output.
console.log("\nHello my name is " + myName + "!\n" +
"Today's date is " + currentDate + " and the current temperature is " + currentTemp + " Degrees.\n" +
"I am " + myAge + " years old years old and my savings account goal is " + savingsGoal + " dollars."
);