'use strict';

const person = {
    Name: "Atharva",
    age: 21,
    gender: "male",
    hobbies : ["guitar", "playing genshin"],
    'likes valorant' : true
}

const { Name, gender , age: myAge, ...restData } = person;
console.log(Name, gender, myAge);
console.log(restData);