/*
============================================
; Title:  Balmaceda Discussion 6.1 (FIX)
; Author: Griselda Balmaceda
; Date:   9 January 2019
; Description: discussion challenge using object properties
;===========================================
*/

//create object

let HoneyCrisp = {}; // Added proper naming convention for an object

//adding properties with defineProperties()
Object.defineProperties(HoneyCrisp,{
Score: {
    value:6,
    writable:true, // Changed this to true to make it able to change.
    enumerable:true,
    configurable:true
},
Taste:{
    value:"Tasty",
    writable:false, // Changed this to false so that you can't overwrite "Tasty".
    enumerable:true, // Changed this to true to make it visible.
    configurable:true,
}
})



HoneyCrisp.Score=6;

HoneyCrisp.Taste="Nasty";

console.log(HoneyCrisp.Score);
console.log(HoneyCrisp.Taste)

//outputting properties with a for in loop
for (const prop in HoneyCrisp){
    console.log(`HoneyCrisp.${prop}=${HoneyCrisp[prop]}`) // Fixed your string literals; The first one had the object outside the code block.
}


//Expected Output
// 6
// Tasty
// honeyCrisp.Score=6
// honeyCrisp.Taste=Tasty
