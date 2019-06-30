/*
============================================
; Title:  Control Statements
; Author: Professor Krasso, Andrew Hemminger
; Date:   16 December 2018
; Modified by: Aaron Wilson
; Description: Corrected sample program.
;===========================================
*/
const header = require('./header.js');
console.log(header.display("Aaron", "Wilson", "Discussion 3.1 Fix"));
console.log('\n');

// Start program

// If you're using ES6, use a "let" here, so that it can be manipulated later in the code.
let x = 0;
// Corrected original code ( y = 10; ) by adding proper variable naming convention.
const y = 10;

/* Although your code was correct using a slightly more advanced technique of declaring two variables
; at once by using a comma as a separator. I decided to simplify it. Because, I almost missed it by
; trying to correct it causing additional errors upon myself.
*/

while (x < y || x < x - y) {
    console.log("x = " + x);

    // SYNTAX ERROR: Changed "X" to "x".
    x++;
    // LOGIC ERROR: The code was missing the plus declaration to concatenate the string to the math operation.
    console.log(y - x + " more iterations to go\n");
}

const z = "COMPLETE!";
console.log(z);

// End program