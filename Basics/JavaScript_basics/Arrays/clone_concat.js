"use strict";

const array1 = ["item1", "item2"];
const array2 = ["item3", "item4"];

// clone and concat an array
// 1
let newArray = array1.slice(0); // from index 0
console.log(newArray);

// 2
newArray = [].concat(array2);
let concatArray = [].concat(array1, array2);
console.log(newArray);
console.log(concatArray);

// 3 spread operator
newArray = [...array1];
console.log(newArray);
