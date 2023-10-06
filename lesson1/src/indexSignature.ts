interface TransactionObject {
    [key:string]:number //index signature
    Account:number,
    Books:number,
    Job:number
}

// interface TransactionObject{
// readonly [index:string]:number
// }

const todaysTransactions:TransactionObject ={
    Account: 10,
    Books:-5,
    Job:2,
    Dave:6
}
console.log(todaysTransactions['Account'])
let props:string= 'Account'
console.log(todaysTransactions[props])

const todaysNet = (transactions:TransactionObject):number =>{
    let total = 0
    for(const transaction in transactions){
        total +=transactions[transaction]
    }
    return total
}
console.log(todaysTransactions['Hello'])  //this returns undefine and typescript doest complain because it has no idea the elements in the object if defined with an index signature [key:string]:number.

interface Student{
    // [key:string]:string|number|number[]|undefined
    name:string,
    GPA:number,
    classes?:number[]
}
const student:Student={
    name:'jon',
    GPA: 4.3,
    classes:[1,2,2]
}
for(const key in student){
    // console.log(`${key}:${student[key]}`) //this throws an error if it doesnt find an index signature
    console.log(`${key}:${student[key as keyof Student]}`) //here's a way you can loop through without an index signature
}

//Another algorithm to destructure the data
Object.keys(student).map(key=>{
    console.log(student[key as keyof typeof student])

})
 
const logStudentkey =(student:Student, key:keyof Student):void=>{
    console.log(`student ${key}:${student[key]}`)
}
logStudentkey(student,'name')
/*------------------------------------------*/

// interface Incomes{
//     [key:string]:number //you cant do this [key:'salary'|'bonus'|'sideHustle] you cant use litrals as index sig
// }
type streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<streams, number> //but you can archieve it with Record utility type

const workerIncome:Incomes ={
    bonus:8,
    salary:12,
    sidehustle:10
}
for(const revenue in workerIncome){
    console.log(workerIncome[revenue as keyof Incomes])
}