/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 28 November 2018
; Modified By: Aaron R. Wilson
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/

/* I elected to use the techniques taught by this lesson.
 * Modern ECMAScript (ES) standards are the norm in 2018.
 * I commented the example of (const) which is a non-destructive
 * unchangeable variable. This means it can't be mutated or manipulated
 * in any way in JavaScript. It is a "constant". If it was meant to be 
 * mutated or manipulated, I would use the command "let". The command
 * "let" can be "changed". That is beyond the scope of this lesson.
 */

var firstName = "Aaron"; // Primitive type: string value.
// ES6, ES7 { const firstName = "Aaron"; }  

var lastName = "Wilson"; // Primitive type: string value.
// ES6, ES7 { const lastName = "Wilson"; }

var age = 47; // Primitive type: integer value.
// ES6, ES7 { const age = 47; }  

var streetAddress = "532 W. Brookhaven Road B1"; // Primitive type: string value.
// ES6, ES7 { const streetAddress = "532 W. Brookhaven Road B1"; }

var city = "Brookhaven"; // Primitive type: string value.
// ES6, ES7 { const city = "Brookhaven"; }  

var state = "Pennsylvania"; // Primitive type: string value.
// ES6, ES7 { const state = "Pennsylvania"; }

var zipCode = 19015; // Primitive type: integer value.
// ES6, ES7 { const zipCode = 19015; }  

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(streetAddress);
console.log(city);
console.log(state);
console.log(zipCode);
// Final output to the console.

/* Another way to output to the console would be to add string manipulation like
{ console.log(firstName\n, lastName\n, age\n, streetAddress\n, city\n, state\n, zipCode)}
A compact one line output. */