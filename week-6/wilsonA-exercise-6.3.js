/*
============================================
; Title:  wilsonA-exercise-6.3.js
; Author: Richard Krasso
; Date:   14 January 2019
; Modified By: Aaron Wilson
; Description: Try, Catch Errors
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 6.3'));

// Make an empty object.
const SupportTicket = {};

// Create a variable to hold a function that will pass an empty object as its parameter.
const callHelpDesk = (Ticket) => {

  // Take the passed parameter and 3 properties, id, name, and requester.
  Ticket = {
    id: 101,
    name: 'Help Desk Support',
    requester: 'Bob Jones'
  };

  /* I could've just returned to the console the direct object like this:
  ;
  ;  return console.log(Ticket);
  ;
  ; Upon doing so, the console will display this output: Object > { id: 101, name: Help Desk Support, requester: Bob Jones}.
  ; You asked for: {id: 101, name: Help Desk Support, requester: Bob Jones}.
  ;
  ; So, by choice, I choose to take your output literally and concatenate the output.
  */

  // Here's how I choose to display, through concatenation, the correct output.
  return console.log('{id: ' + Ticket.id + ', name: ' + Ticket.name + ', requester: ' + Ticket.requester + '}');
}

// Call the callHelpDesk function variable passing in the supportTicket blank object literal as the argument.
callHelpDesk(SupportTicket);
