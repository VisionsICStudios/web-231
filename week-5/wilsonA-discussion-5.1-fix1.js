/*
============================================
; Title: Advanced Arrays
; Authors: Professor Krasso, Andrew Hemminger
; Date: 11 January 2019
; Modified by: Aaron Wilson
; Description: Exercise 5.1 Advanced Arrays
;===========================================
*/

// Don't mind me, I wanted to update the code to ES5+ standards (just my preference).
const header = require('./header.js'); // PREFERENCE: changed var to const.
console.log(header.display('Aaron', 'Wilson', 'Discussion 5.1 Fix'));
// console.log('\n'); PREFERENCE: I commented this out to reduce the larger gap in spacing.

// Start program
console.log("Summer 2019 Bellevue race events:");

const trackRace = {dist1: '100m', dist2: '200m', dist3: '400m',}; // PREFERENCE: changed var to const for ES5+ standards.
trackRace.dist6 = '1600m';
trackRace.dist7 = '3200m';
trackRace.dist8 = '400m Hurdles';
// trackRace.dist3 = '400m Relay'; I commented this conflicting key, value pair out to reflect the correct output. ()
trackRace.dist4 = '1600m Relay';

for (var id in trackRace) {
  // Original error code: console.log(id + " " + trackRace[key]);
  console.log(`${id} ${trackRace[id]}`); // I changed "key" to id to make it execute the code correctly. Also for my own preference added it as a string literal.
}

//End program

/*
Expected Output:

Summer 2019 Bellevue race events:
dist1 100M
dist2 200M
dist3 400M
dist6 1600M
dist7 3200M
dist8 400M Hurdles
dist4 1600m Relay

*/
