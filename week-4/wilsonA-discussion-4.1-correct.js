/*
============================================
; Title:  wilsonA-discussion-4.1.js
; Author: Aaron Wilson
; Date: 13 December 2018
; Modified By: N/A
; Description: Arrays with errors.
;===========================================
*/

/*  DIRECTIONS: ----------------------------------------
; The student attempting to fix this has to get this
; program to correctly output the segment of the
; Reindeer Poem all the way to the line
; "Ho! Ho! Ho! Merry Christmas!!".
;
; Find the 2 errors (1 syntax error, 1 logical error) to
; make the program run!
;
; HINT! - fix the syntax error first. It'll make the
; holiday experience more fun. Pay attention to the
; console debugger.
-------------------------------------------------------
*/

// require method for the header output.
const header = require('./header.js');

// Output to the console the header display function.
console.log(header.display('Aaron', 'Wilson', 'Discussion-4.1: Reindeer Games (Fix Errors)'));

// A greeting variable as just my one.
const greeting = 'Hello There! Let\'s play REINDEER GAMES!\n'

const wordNine = 'Vixen';
const intro = 'You know ';
const wordFive = 'Dancer';
const and = ' and ';
const wordSeven = 'Prancer';
const wordSixteen = 'Blitzen';
const verseTwo = 'But do you recall';
const wordThree = 'Dasher';
const verseThree = 'The most famous reindeer of all?';
const wordFourteen = 'Donner';
const verseFour = ' the Red-Nosed Reindeer';
const wordTen = 'Comet';
const verseFive = 'Had a very shiny nose';
const wordTwelve = 'Cupid';
const verseSix = 'And if you ever saw it';
const wordTwentySeven = 'Rudolph';
const verseSeven = 'You would even say it glows';
const verseEight = 'All of the other reindeer';
const verseNine = 'Used to laugh and call him names';
const verseTen = 'They never let poor ';
const verseEleven = 'Join in any reindeer games!';
const seasonsGreetings = '\n********** Ho! Ho! Ho! MERRY CHRISTMAS!! ***********';
const warning = '===========> !! HALT !! <============\n'
const wrongOrder = 'Silly lump of Coal! That\'s not the way it goes, Try again';

// A Rudolph the Red-Nosed Reindeer poem array in pieces.
const poemPieces = [
  wordNine, // index 0.
  intro, // index 1.
  wordFive, // index 2.
  and, // index 3.
  wordSeven, // index 4.
  wordSixteen, // index 5.
  verseTwo, // index 6.
  wordThree, // index 7.
  verseThree, // index 8.
  wordFourteen, // index 9.
  verseFour, // index 10.
  wordTen, // index 11.
  verseFive, // index 12.
  wordTwelve, // index 13.
  verseSix, // index 14.
  wordTwentySeven, // index 15.
  verseSeven, // index 16.
  verseEight, // index 17.
  verseNine, // index 18.
  verseTen, // index 19.
  verseEleven // index 20.
]

// A Santa's reindeer Array w/ all reindeer names as string values.
const santasReindeer = [
  'Dasher', // Be aware of the indices.
  'Dancer',
  'Prancer',
  'Vixen',
  'Comet',
  'Cupid',
  'Donner',
  'Blitzen',
  'Rudolph'
];

// Created a function called reindeerGame that accepts the two arrays and a validation as its parameters until the "cap" number is reached.
function reindeerGame (arrayOne, arrayTwo, check) {

  // An empty correctOrder array is created to store the iterations of santasReindeer array.
  let correctOrder = [];

  // Output the greeting variable to the console.
  console.log(greeting);

  // Create a for loop to iterate or count up through the first array's length.
  for(var i = 0; i < arrayOne.length; i++) {

    // Create a variable called fault to pass the current string value iterated as a reference of validation.
    let fault = '\n' + arrayOne[i] + ' ???\n\n';

    // Created a switch statement to cascade the iterated value through expressed conditions (santasReindeer array as the parameter arrayOne w/ index of i).
    switch (arrayOne[i]) {

      // first cross-referenced value to pass iterated value through. Every case reference moving forward is using the same principal.
      case arrayOne[0]:

        // A comparison of i (iterated value), and the index value of the second passed in parameter (poemPieces as arrayTwo). This principal is the same moving forward.
        if(arrayOne[i] === arrayTwo[7]) {

          // If the condition is met, the current iterated value gets added to the array. This principal is the same and repeated moving forward.
          correctOrder.push(arrayOne[i]);
        } else {

          // If the condition is not met, the reindeerGame function returns a string value to let the user know to try again. The program is stopped as this point.
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[1]:
        if(arrayOne[i] === arrayTwo[2]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[2]:
        if(arrayOne[i] === arrayTwo[4]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[3]:
        if(arrayOne[i] === arrayTwo[0]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[4]:
        if(arrayOne[i] === arrayTwo[11]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[5]:
        if(arrayOne[i] === arrayTwo[13]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[6]:
        if(arrayOne[i] === arrayTwo[9]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[7]:
        if(arrayOne[i] === arrayTwo[5]) {
          correctOrder.push(arrayOne[i]);
        } else {
          return console.log(warning + fault + check);
        }
        break;
      case arrayOne[8]:
        if(arrayOne[i] === arrayTwo[15]) {

          correctOrder.push(arrayOne[i]);

          // Add i to the correctOrder array above. Compile and concatenate lineOne variable.
          let lineOne = arrayTwo[1] + correctOrder[0] + arrayTwo[3] + correctOrder[1] + arrayTwo[3] + correctOrder[2] + arrayTwo[3] + correctOrder[3];

          // Compile and concatenate lineTwo variable.
          let lineTwo = correctOrder[4] + arrayTwo[3] + correctOrder[5] + arrayTwo[3] + correctOrder[6] + arrayTwo[3] + correctOrder[7];

          // An empty readPoem array is created to store the strings of the newly created above variables.
          let readPoem = [];

          // In the grouping below, each variable and index values of poemPieces array are passed and added into the readPoem array.
          readPoem.push(lineOne);
          readPoem.push(lineTwo);
          readPoem.push(arrayTwo[6]);
          readPoem.push(arrayTwo[8]);

          // Another new variable is created of concatenated values to store for later manipulation.
          let lineFive = correctOrder[i] + arrayTwo[10];

          // the above new variable and several index value groupings of the poemPieces array are added in succession to the readPoem array.
          readPoem.push(lineFive);
          readPoem.push(arrayTwo[12]);
          readPoem.push(arrayTwo[14]);
          readPoem.push(arrayTwo[16]);
          readPoem.push(arrayTwo[17]);
          readPoem.push(arrayTwo[18]);

          // Another new variable is created of concatenated values to store for later manipulation.
          let lineEleven = arrayTwo[19] + correctOrder[i];

          // The above new variable and some final index value groupings of the poemPieces array below are added in succession to the readPoem array.
          readPoem.push(lineEleven);
          readPoem.push(arrayTwo[20]);
          readPoem.push(seasonsGreetings);

          // The below code compiles and outputs to the console the finished poem.
          for(var x = 0; x < readPoem.length; x++) {
            // .
            console.log(readPoem[x]);
          }
        }
      break;
      default:

        // output dialog to let users know the cap is reached.
        return console.log(warning + fault + check)
      break;
    }
  }
}

// Output the final result by passing the arrays and the validation variable in as arguments/parameters to the reindeerGame function.
reindeerGame(santasReindeer, poemPieces, wrongOrder);
