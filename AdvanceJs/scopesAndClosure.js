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