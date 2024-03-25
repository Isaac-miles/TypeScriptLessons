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

//Partial application
//the process of executing a function with some or all of its arguments. the pratially applied function then gets returned for later use.
function greet(greeting, name){
    log(`${greeting},${name}!!`)
}
const greetMe = greet.bind(null,"G' Dya")

function multiply(a,b){
    return a*b;
}

function partial(func,...fixedArgs){
    return function(...remainingArgs){
        return func(...fixedArgs,...remainingArgs)
    };
}

const doubled = partial(multiply, 2)

//Composition:function composition is a mechanism of combining multiple functions to build a more complicated one. f(g(x))
const add=(a,b) =>a+b;
const squared =(a)=>a*a;
squared(add(2,2))

function lowerCaseString(str){
    return str.toLowerCase()
}
 function splitWords(str){
    return str.split(" ")
 }
 function joinWithDash(array){

    return array.join("-")
 }
 joinWithDash(
    splitWords(
        lowerCaseString(
            "Hello My Name is Miles"
        )
    )
 );

 function compose(...functions){
    return function(data){
       return functions.reduceRight((val,func)=>func(val), data)
    }
 }

 const slug = compose(joinWithDash,splitWords,lowerCaseString);

 //Currying:a curried function can be called with any number of arguments- if you call it with fewer args than it takes,it returns a "smaller" partial which you can then call with remaining arguments.
 function addAll(a,b,c){
    return a+ b+ c
 }

 //simplest example
 function addCurry(a){
    return function(b){
        return function(c){
            return a+b+c
        };
    };
 }

 function add3(x,y,z){
    return x+y+z
 }

 function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args);
        }else{
            return function(...args2){
                return curried.apply(this,args.concat(args2))
            }
        }
    }
 }