/*
============================================
; Title:  wilsonA-assignment-6.4.js
; Author: Richard Krasso
; Date:   14 January 2019
; Modified By: Aaron Wilson
; Description: Try, Catch Errors
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Assignment 6.4'));

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awarded points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// Create the empty object for the nested object literal.
let Ticket = {};

// Build out a function to pass in one parameter
const displayTicketInfo = (Obj) => {

  // Create an object literal with another object nested inside that Ticket object.
  Obj = {
    id: 105,
    name: 'employee',
    dateCreated: 	new Date().toLocaleDateString('en-US'),
    priority: 'assigned',
    Person: {
      id: 001,
      firstName: 'Bob',
      lastName: 'Jones',
      jobTitle: 'Programmer I'
    }
  };

  // Log out to the console a concatenated combination of strings and dot notations of the properties within the Ticket object.
  console.log('Ticket ' + Obj.id + ' was created on ' + Obj.dateCreated + ' and ' + Obj.priority + ' to ' + Obj.name + ' ' + Obj.Person.firstName + ' ' + Obj.Person.lastName + ' (' + Obj.Person.jobTitle + ').');
}

// Call the displayTicketInfo function while passing in the empty Ticket object variable as its lone parameter.
displayTicketInfo(Ticket);
