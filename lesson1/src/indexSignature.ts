// interface TransactionObject {
//     Account:number,
//     Books:number,
//     Job:number
// }

interface TransactionObject{
[index:string]:number
}

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