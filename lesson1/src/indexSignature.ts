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
    Job:2
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

