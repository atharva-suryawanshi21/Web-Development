'use strict';

const person = {
    name: "Atharva",
    age: 21,
    gender: "male",
    "likes valorant" : true
}

// for in loop
for (let key in person) {
    console.log(key,":",person[key]);
}

// to get all keys, this gives an array of keys
console.log(Object.keys(person));