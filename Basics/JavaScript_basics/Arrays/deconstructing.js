"use strict";

//array deconstructing

const Array = ["item1", "item2", "item3", "item4"];

let [element1, element2] = Array
console.log(element1, element2);

let [ , ,element3, element4] = Array
console.log(element3, element4);

// to store all elements except 1st and 2nd in new array
const [, , ...newArray] = Array
console.log(newArray);


