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

//apply we use it to call a function with a specific value  for keyword this, the main difference is in how it handles arguments, it expects you to pass the arguments as an array
const ringMe = {
    name:'Miles',
    greet:function(greeting){
        console.log(`${this.name} says ${greeting}`)
    }
}
const samuel = {
    name:"Helen",
    fullName:"Jones Helen"
}

ringMe.greet.call(samuel,"Hello miles")
ringMe.greet.apply(samuel,["hey"])

const nums = [1,19,28,6,5];
Math.max.apply(null,nums);

function maximum(){
    // log(arguments)
    return Math.max.apply(null,arguments)
}
maximum(1,2,3,4,5,6)

const Fruit = {
    name:'Mango',
    taste:function(sweet,bitter){
        log(`the fruit is ${sweet} and ${bitter}`)
    }
}
Fruit.taste.call(null,"tasty","harsh")
Fruit.taste.apply(null,["tasty","harsh"])

//Bind: you can "perma-bind a function to a context"
// const drSam = ringMe.greet.bind(samuel)

//Bind Arguments
function applySaleTax(taxRate, price){
    return price + price * taxRate
}
const ngSalesTax = applySaleTax.bind(null,0.072)
const GHSalesTax = applySaleTax.bind(null,0.072,200)//bind both args, set this to null
log(ngSalesTax(300))
log(GHSalesTax())
//bind is mostly used with(event listeners,timers,callbacks(map,filter,etc))

// const btn = document.querySelector("#click_here")
const btn = document.querySelector("#clickMe")
//without binding js sets the context of this object to btn, but binding mean you bind it to person
 btn.addEventListener("click",person.sing.bind(person))

 //timers
 class Counter{
    constructor(startNum, increment){
        this.count = startNum
        this.increment = increment
    }
    start(){
        setInterval(function(){
            log(this.count)
            this.count += this.increment;
        },1000)
    }
 }
