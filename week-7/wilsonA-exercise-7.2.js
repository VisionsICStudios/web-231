/*
============================================
; Title: wilsonA-exercise-7.2.js
; Author: Richard Krasso
; Date: 24 January 2019
; Modified By: Aaron Wilson
; Description: Building constructor
; functions.
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 7.2'));

// Create an null variable that will be mutable to an array.
let people = null;

// Create a function to work as an assembly line to output the people.
const outputPeople = (arr) => {

  // Build an object constructor function.
  function FamousPerson(firstName, lastName, jobTitle) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
  }

  // Create the new FamousPerson objects in the arr parameter as the array.
  arr = [
    new FamousPerson('Thomas', 'Edison', 'Software Engineer'),
    new FamousPerson('Benjamin', 'Franklin', 'Programmer'),
    new FamousPerson('Nikola', 'Tesla', 'Project Manager'),
    new FamousPerson('Charles', 'Babbage', 'Product Manager'),
    new FamousPerson('Alexander', 'Bell', 'Business Analyst')
  ];

  // Output to the console a for loop iterations of the people array.
  let ol = 1 // The ol variable names stands for "ordered list".
  for (let i = 0; i < arr.length; i++) {
    console.log(ol + '. ' + arr[i].firstName + ' ' + arr[i].lastName + ' ' + arr[i].jobTitle);
    ol++
  }
}

// Call the outputPeople function to produce output.
outputPeople(people);
