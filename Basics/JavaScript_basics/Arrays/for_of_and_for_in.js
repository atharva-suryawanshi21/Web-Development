'use strict';

const myArray = ["item1","item2","item3", "item4"]
// to iterate through all elements of array
console.log("'for of '");
for (let item of myArray)
{
    console.log(item);
}

// to iterate through all indices of array
console.log("'for in '");
for (let index in myArray)
{
    console.log(index);
}