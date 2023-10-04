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