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
        return this.type + this
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
 */