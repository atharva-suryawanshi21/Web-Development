"use strict";
// We can use both let and const to declare array
// but using const is preferred because this will give error
// if we try to redeclare an array,
// push, pop is allowed but not reassignment of an array

const myArray = ["banana", "apple"];

//push and pop elements at end
myArray.push("grapes");
console.log(myArray);
let poppedFruit1 = myArray.pop();
console.log("popped item :", poppedFruit1);

// push and pop elements from start
myArray.unshift("grapes");
console.log(myArray);
let poppedFruit2 = myArray.shift();
console.log("popped item :", poppedFruit2);

// To check if the an object in an array
console.log(Array.isArray(myArray));
// typeof myArray -> gives type as object
