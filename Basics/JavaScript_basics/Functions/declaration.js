"use strict";

// 1. function declaration
function addNum1(num1, num2) {
    return num1 + num2;
}


// 2. function expression
const addNum2 = function(num1,num2){
    return num1 + num2;
}


// 3. arrow function
const addNum3 = (num1, num2) => {
    return num1 + num2;
}


// HOISTING
//if a function is called before declaring it, it executes succesfully
// eg.
hello();
function hello() {
    console.log("hello world");
}
// in case of expression and arrow this gives error

// lexical scope

{// inside block
    var game = "Genshin Impact"
    const Name = "Atharva"
    let Age = "21"
}
console.log(game);
// console.log(Name); these both will give error
// console.log(Age)
