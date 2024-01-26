'use strict';

const person = {
    Name: "Atharva",
    age: 21,
    gender: "male",
    hobbies : ["guitar", "playing genshin"],
    'likes valorant' : true
}

const info = ({ Name, age }) =>
{
    console.log(`${Name} is ${age} years old !!`);
}

info(person);