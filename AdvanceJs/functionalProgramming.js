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
    if(num%2 === 0)evens.push(num)
}
log(evens)

//functional approach
const odd = nums.filter((n)=> n % 2 !== 0);
log(odd)

//Imperative approach
let numbers = [1,2,3,4,5]
let max = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i]
    }
}
log(max)

//functional approach
Math.max(...numbers);

//pure functions: referential transparency, the function always gives the same return value for the same argument, the function cannot depend on any mutable state, side effect free.

//Impure
let value =2;
function squareAndUpdateValue(num){
    value = num * num
    return num;
}
//Pure
function square(num){
    return num * num;
}
//Impure
const colors = ["red","orange"];
function addToArray(arr,value){
    return arr.push(value);
}

//Pure: this returns a new copy of the array
function pureAddToArray(arr,value){
    return [...arr,value]
}

//Higher Order functions: a function that receives another func as argument, returns a func, or does both
function doTwice(func){
    func()
    func()
}
doTwice(()=>log("Hello I am an argument"));

function multiplyBy(factor){
    return (number)=>{
        return number * factor
    };
}

const double = multiplyBy(2);
log(double(2))

//Immutability
const arrayNum = [1,2,3,4]
arrayNum.push(5) //const alone doesn't prevent mutability

const person = {name:"Jon", age:4}
Object.freeze(person) // one way of preventing mutability in objects

//Recursion
//factorial: 3!, this is not a recursive approach
function factorial(n){
    let result = 1;
    for(let i=n;i>1; i--){
        result *= i
    }
    return result
}

//recursive approach
function factorial2(n){
    if(n===0 || n===1){
        return 1;
    }
    return n* factorial(n-1);
}