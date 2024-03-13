const {log} = console
const person = {
    name:'doe',
    city:'lagos',
    sing:function(){
        console.log(this)
        return `${this.name} sings Hellow world`
    }
}
function whatIsThis(){
    console.log('what is this',this)
}
// the general rule is the value of this will always be whats on this left handside eg the above window.whatIsThis this refered to the win obj
const obj ={
    name:'mile',
    age:2,
    whatIsThis
}
//in the case above the this key word refers to the obj
class Animal{
    type;
    constructor(type){
        this.type = type
    }

    toDesc(){
        log("this refers to",this)
    }
    shakeTail(mode="shaking"){
        log('This is :',this)
        return `${this.type} likes ${mode}`
    }
    static getThis(){
        console.log(this)
    }
}
const cat = new Animal("Cat")
 /* 
 OOP and this
 when you cakk a function on nothing,but the function comes from inside a class,the value of this will be undefined, not the window
 in either case,you'll see this refered ato as "losing the this context"

 but there are ways to force the value of this to be whatever we want
 */

 //CALL and BIND
 //sometimes, you'll need to say call this function on this object, That's what call() is for
 log(cat.toDesc())
 const desc = cat.toDesc
 desc()
 desc.call(cat)

 const dog = new Animal('shepard')
 desc.call(dog)
 //we can also pass args to the call

const newDog = dog.shakeTail
log(newDog.call(dog,"dancing"))

//example 2
const linda ={
    name:'Lindiway',
    city:'Abuja'
}
person.sing()
person.sing.call(linda)