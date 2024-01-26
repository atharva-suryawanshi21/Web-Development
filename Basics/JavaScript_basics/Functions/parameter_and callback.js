"use strict";

// default parameters
const addNum = (num1 = 0, num2 = 0) => {
  console.log(num1 + num2);
};

// rest parameters

const addAllNum = (...numArray) => {
  let total = 0;
  for (let index = 0; index < numArray.length; index++) {
    total = total + numArray[index];
  }
  console.log(total);
};

addAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//________________________________________________________________________

// function callbacks
// to get value of square of hypothenuse from other sides in a triangle
const square = (num) => {
  return num * num;
};

const add = (square, side1, side2) => {
  let s1 = square(side1);
  let s2 = square(side2);
  return s1 + s2;
};

// for triangle of sides 3,4 and 5
console.log(add(square, 3, 4));

//________________________________________________________________
//function returning function

function msg(message) {
  console.log("I am in hello");
  function world() {
    console.log(`message: ${message} world`);
  }
  return world;
}

const world_func = msg("hi");

world_func();
