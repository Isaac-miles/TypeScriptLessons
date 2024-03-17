/* the new keyword does four things:
creates an empty object, sets the keyword this to be that object
returns the object
creates a link to the object's prototype*/

class DogClass{
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }
    bark(){
        return `${this.name} says woof`
    }
    sleep(){
        return `${this.name} is sleeping`
    }
}
//below is a constructor function
function Dog(name,breed){
    this.name = name;
    this.breed = breed;
    // this.bark = function(){
    //     return `${this.name} says woof`
    // }
    // this.sleep = function(){
    //     return `${this.name} is sleeping`
    // }
}
//prototypes are the basic mechanism that gives JS objects th ability to inherit features and functionality from each other.the prototype itself is an object that has its own prototype
const myObj ={
    color:'red',
    score:9,
    greet(){
        log('hello')
    }
}

Dog.prototype.bark = function(){
    return `${this.name} says woof`
}
Dog.prototype.sleep =function(){
    return `${this.name} is sleeping`
}
Dog.prototype.toString =function(){
    return `${this.name} is the toString method`
}
const parent ={
    son:'miles',
    sing(){
        log("hello")
    }
}
const child ={
    daughter:'miles',
  
}