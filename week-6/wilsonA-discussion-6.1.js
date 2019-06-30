/*
============================================
; Title:  wilsonA-discussion-6.1.js
; Author: Aaron Wilson
; Date:   14 January 2019
; Description: Object Literals - Errors
;===========================================
*/


// Header info.
const header = require('./header.js');

// Output to the console the header info.
console.log(header.display('Aaron', 'Wilson', 'Discussion 6.1 (FIX ERRORS)'));

// Build pepBoys object with nested objects.
const PepBoys = {

  // Boy1, Boy2, and Boy3 are the nested objects within the pepBoys object.
  Boy1: {
    name: '\nManny',
    characteristic: 'Stogie'
  },
  Boy2: {
    name: 'Moe',
    characteristic: 'Stash'
  },
  Boy3: {
    name: 'Jack\n',
    characteristic: 'Smile'
  }
};

// Make the moveBoys variable as a function passing in the pepBoys object w/ the 3 nested objects.
const moveBoys = (fabThree) {

  // create an empty array called autoStore.
  let autoStore = [];

  // Push the 3 nested objects in pepBoys object into the autoStore array/
  autoStore.push(fabThree.boy3);
  autoStore.push(fabThree.boy3);
  autoStore.push(fabThree.boy3);

  // Output autoStore.
  return autoStore;
};

// Create a ES5 function as a variable that passes two map variables as its parameters.
const filterTheBoys = (boys) => {

  // Map out, into a variable, the correct order that is expected at the autoStore.
  const orderMap = boys.map((mapName) => {

    // Return a new object manipulated to the way it needs to be filtered for output.
    return {

        // New single property called name.
        name: mapName.name
    }
  });

  // Create an exception-handler that runs a forEach loop to see if it's right.
  try{

    // Output to the console the rating header.
    console.log('-- WHO ARE THE MOST FAMOUS AUTO BOYS --');

    // Make a forEach loop to use the mapped variable to filter out it's newly created object properties.
    orderMap.forEach((boy) => {

      // Set up a if condition to check the order.
      if(orderMap[0].name !== '\nManny')

      // Throw the exception.
      throw '\nWhat do you think this is... AutoZone! Please get the order right!\n'

      // Output to the console the rating property for each composer and their new composer property using string literals.
      console.log(`${boy.name}`);

      // Create an if condition to add in to the loop the string "and" at the right time.
      if(boy.name === 'Moe') {
        console.log('and');
      }
    });

    // Catch that error and log it to the console.
  } catch(err) {

    // Log to the console the throw as the err argument.
    console.log(err);

    // Output to the console the final statement.
    console.log('Where my Boys at! TRY AGAIN?');
  }

  if(boys[0].name === '\nManny' && boys[1].name === 'Moe' && boys[2].name === 'Jack\n') {
    // Output to the console the final statement.
    console.log(`Now, the Pepboys, famous for the ${boys[0].characteristic}, the ${boys[1].characteristic}, and the ${boys[2].characteristic} can handle all your automotive needs!`);
  }
}

// Call the filterTheBoys function to execute the output.
filterTheBoys(moveBoys(PepBoys));
