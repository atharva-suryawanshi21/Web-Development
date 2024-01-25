'use strict';
// object store data in key-value pair
// it is not index based

const person = {
    name: "Atharva",
    age: 21,
    gender: "male"
}
console.log(person);

//Access data 
console.log(person.name);
console.log(person["name"]);

//Add element
person.hobbies = ["guitar", "playing genshin"];

// difference between dot and bracket access
// 1. if we want to add a key name that has space, brackets can be used only
person['likes valorant'] = true;
// 2. if we want add a key- value where name of key is stored in a variable
const key = "likes_ML";
person[key] = true

console.log(person);

// computed properties
const key1 = "name";
const value1 = "Raiden";

const Genshin = {
    [key1] : value1
}
