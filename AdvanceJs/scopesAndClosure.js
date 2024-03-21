const {log} = console
//Scope and closure: Js is a stickly or lexically scoped language, determining scope is not dynamic the scope of a value is not dependent on its execution context

let animal = "first Animal"

function printAnimal(){
    log(animal)
}
function printAnimal2(){
    let animal = "Second Animal"
   printAnimal()
}

printAnimal2() //this prints  first animal

//Hoisting: var variable declarations are pulled to the top of their function so the variable is legal,but equal to undefined until definition

//log(food) //this throws an error reference error food is not defined

//exam 2
log(food2) //this doesnt throw an error but instead undefined for var
var food2 = "rice"

//this translates to
let foodTwo = undefined;
log(food2)
foodTwo = "rice"

print();

function print(){
    // var color =undefined
    log(color)
    var color = "black"
}
//with let and const its not like this
function printA(){
    console.log(name);
    const name = "Isaac"
}

function printB(){
    //TEMPORAL DEAD ZONE STARTS
    console.log(color);
    //reference error cannot access 'color' before initialization
    
    const color = "Isaac"
}
//IFF immediately invoked functions
(function(){
    log("hello iffff")
})()

//closures, inner functions having access to the outer function properties
function outerFunction(){
    let outerVariable =" I am outer function !"
    function innerFunction(){
        log("Inner function")
        log("outer variable is ",outerVariable)
    }
    return innerFunction
}

const myClosure = outerFunction()
myClosure()
//benefits closures, enables us to create private variable
function createCounter(){
    let count =0 ;
    return {
        increment:function(){
            return count++;
        },
    }
}