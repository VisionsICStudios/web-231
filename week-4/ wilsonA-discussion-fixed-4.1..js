/*
============================================
; Title:  wilson-discussionBoard4.1.js
; Author: Chris Wilson
; Date:   20 Dec 2018
; Modified By: Aaron Wilson
; Description: Array Errors
;===========================================
*/

// Import the header function
const header = require('./header.js');
console.log(header.display('Chris', 'Wilson', 'DiscussionBoard 4.1'));
console.log('');

const assortedArray = [{
        type: 'I am an object'
    },
    'I am a string!!', ['I', 'Am', 'An', 'Array', 'of', 'length', 7], // Fixed the variables in the array were unassigned or otherwise undefined variables. I made them primitive string values.
    function() {
        return 'I am a function that has been called!';
    },
    true,
    128,
    null,
    undefined
];
// Fixed the let i was using '==' as a comparison operator instead of a direct assignment operator '=' in the first segment of the for loop.
for (let i = 0; i < assortedArray.length; i++) {
    if (typeof assortedArray[i] === 'function') {
        console.log(assortedArray[i]());
    } else {
        console.log(assortedArray[i]);
    }
}
