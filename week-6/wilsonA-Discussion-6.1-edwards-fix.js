/*
=====================================
Title: Edwards Discussion 6.1 (FIX) - Object Properties
Author: Alan Edwards
Date: 20 January 2019
Modified by: Aaron Wilson
Description: Showcases object properties
*/

const header = require('./header');
/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted header
 */

 console.log(header.display('Aaron ', 'Wilson', 'Edwards Discussion 6.1 Fix') +"\n");


var Wife = { // Changed the variable from wife, to Wife. (proper naming convention)
   mood:"Happy",
   who:"wife"
};

console.log (Wife.mood  + " " + Wife.who + ". " + Wife.mood + " life." ); // Added a spacing string and more spacing after the period. Also added proper naming convention for an object.

/* expected output

Happy wife. Happy life.

*/
