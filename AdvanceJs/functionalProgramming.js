const {log} = console;
//Functional programming is the process of building software by composing pure functions, avoiding shared state,mutable data, and side-effect, FP is often declarative rather than imperative and application state flows through pure functions.

//functional programming methods (map,filter,some/every,find/findIndex,reduce)

//Imperative programming eg: describing using code
let sum = 0;
for(let i=0; i<=5;i++){
    sum += i
}
//functional programming: writing pure functions to archive same result
let j = [1,2,3,4,5].reduce((acc,val)=> acc + val, 1);

const nums = [1,2,3,4,5,6,7,8,9];
//Imperative approach
const evens = [];
for(let num of nums){
    if(num%2 != 0)evens.push(num)
}
log(evens)

//