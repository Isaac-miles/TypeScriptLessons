"use strict";
//literal types
let myName;
myName = 'Isaac';
let myNames;
myNames = 'Miles';
//functions
const add = (a, b) => {
    return [a, b];
};
console.log(add('jon', 5));
//optional parameters
const addAll = (a, b, c) => {
    //type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default params
const sumAll = (a, b, c = 2) => {
    //type guard
    return a + b + c;
};
const diffAll = (a = 10, b, c = 2) => {
    //type guard
    return a + b + c;
};
console.log(sumAll(5, 5, 5));
console.log(sumAll(5, 5));
console.log(diffAll(undefined, 5));
//rest params
const total = (...nums) => {
    return nums.reduce((pre, curr) => pre + curr);
};
console.log(total(5, 5, 5, 2, 3, 5));
//return type never is specifically for functions that throw error or contains an infinit loop
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const loop = () => {
    let a = 1;
    while (true) {
        a++;
        if (a > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numOrString = (val) => {
    if (typeof val === 'string')
        return 'string';
    if (isNumber(val))
        return 'number';
    return createError('Internal server error');
};
