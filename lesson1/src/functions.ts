type stringOrNumber = string | number
type stringOrNumberArray = (stringOrNumber)[]

type Guitarist ={
    name?:string,
    active:boolean
    albums:stringOrNumberArray
}
type UserId = stringOrNumber

//literal types
let myName:'Isaac'
myName = 'Isaac'
let myNames :'Dave' | 'Isaac' | 'Miles'
myNames = 'Miles'

//functions
const add=<T, S>(a:T , b:S)=>{
  return [a,b]
}
console.log(add('jon', 5))

//optional parameters
const addAll =(a:number, b:number, c?:number):number=>{
//type guard
if(typeof c !=='undefined'){
    return a+b+c
}
 return a+b
}

// default params
const sumAll =(a:number, b:number, c:number =2):number=>{
//type guard
 return a+b+c
}
const diffAll =(a:number=10, b:number, c:number =2):number=>{
//type guard
 return a+b+c
}

console.log(sumAll(5,5,5))
console.log(sumAll(5,5))
console.log(diffAll(undefined,5))

//rest params
const total = (...nums:number[]):number=>{
    return nums.reduce((pre, curr)=>pre +curr)
}
console.log(total(5,5,5,2,3,5))

//return type never is specifically for functions that throw error or contains an infinit loop
const createError=(errorMsg:string)=>{
    throw new Error(errorMsg)
}

const loop=()=>{
    let a = 1
    while(true){
        a++
        if(a>100) break
    }
}

const isNumber= (value:any):boolean=>{
    return typeof value ==='number'
    ?true : false
}

const numOrString =(val:number | string):
string=>{
    if(typeof val ==='string') return 'string'
    if(isNumber(val)) return 'number'
    return createError('Internal server error')
}