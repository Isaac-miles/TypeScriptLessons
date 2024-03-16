/* the new keyword does four things:
creates an empty object, sets the keyword this to be that object
returns the object
creates a link to the object's prototype*/

class Dog{
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
// function Dog(name,breed){
//     console.log("This is" ,this)
//     this.name = name;
//     this.breed = breed;
// }
//prototype
