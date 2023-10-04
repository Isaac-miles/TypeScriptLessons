"use strict";
const { log } = console;
//convert to more or less specific
let a = 'mile';
let b = a; //less specific type
let c = a; //more specific
let d = 'world';
let e = 5;
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS sees no problem - but a string is returned
let myVal1 = addOrConcat(2, 2, 'concat');
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#myImg');
const myImg1 = document.getElementById('#myImg');
img.src;
myImg.src;
