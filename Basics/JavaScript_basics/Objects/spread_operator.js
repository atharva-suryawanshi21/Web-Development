'use strict';

const obj1 = {
    key1 : "item1",
    key2 : "item2"
}

const obj2 = {
    key1 : "item3",
    key3 : "item4"
}

const obj3 = {
    ...obj1, ...obj2, newKey : "Shogun"
}

console.log(obj3);
// name of a key in both objects is same
// note that key1 of obj2 take priority 