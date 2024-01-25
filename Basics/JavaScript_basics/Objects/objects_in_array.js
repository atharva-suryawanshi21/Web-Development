"use strict";

const myArray = [
  { name: "Atharva", age: 21 },
  { name: "raiden", age: 31 },
  { name: "Mokoto", age: 111 },
];

for (let element of myArray) {
  console.log(element);
  console.log(element.name);
}

// nested desructuring
const [person1, , { name, age: MokotoAge }] = myArray;
// 2nd element skipped
console.log(person1);
console.log(MokotoAge);
