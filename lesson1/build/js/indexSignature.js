"use strict";
// interface TransactionObject {
//     Account:number,
//     Books:number,
//     Job:number
// }
const todaysTransactions = {
    Account: 10,
    Books: -5,
    Job: 2
};
console.log(todaysTransactions['Account']);
let props = 'Account';
console.log(todaysTransactions[props]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
