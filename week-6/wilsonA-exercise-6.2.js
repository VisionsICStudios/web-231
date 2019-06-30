/*
============================================
; Title:  wilsonA-exercise-6.2.js
; Author: Richard Krasso
; Date:   14 January 2019
; Modified By: Aaron Wilson
; Description: Create a try/catch/finally
; block.
;===========================================
*/

// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Exercise 6.2'));

// variables to pass to the try/catch.
let fun = 'a football';
let influenza;

const howsMyHealth = (sickness) => {

  // Create a try block that houses an if condition to check the passed in 'undefined' influenza variable as a parameter.
  try {
    if (sickness === undefined) throw 'Ewww! You\'re sick!! Your';

    // catch that error and display the throw output to the console.
  } catch (err) {
    sickness = 'The Flu';
    console.log(`Catch Clause: The Doc determined that... ${err} illness is in fact - ${sickness}!`);

    // Once the error has been determined, continue to execute the code in the console, to the program's end.
  } finally {
    console.log(`Now that the doctor has deemed you to be better, I'd rather you \"catch"\ ${fun}, then ${sickness}!\nFinally clause reached...`);
  }
}

// call the function for output.
howsMyHealth(influenza);
