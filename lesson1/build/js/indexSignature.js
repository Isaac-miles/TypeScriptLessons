"use strict";
// interface TransactionObject{
// readonly [index:string]:number
// }
const todaysTransactions = {
    Account: 10,
    Books: -5,
    Job: 2,
    Dave: 6
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
console.log(todaysTransactions['Hello']); //this returns undefine and typescript doest complain because it has no idea the elements in the object if defined with an index signature [key:string]:number.
const student = {
    name: 'jon',
    GPA: 4.3,
    classes: [1, 2, 2]
};
for (const key in student) {
    // console.log(`${key}:${student[key]}`) //this throws an error if it doesnt find an index signature
    console.log(`${key}:${student[key]}`); //here's a way you can loop through without an index signature
}
//Another algorithm to destructure the data
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentkey = (student, key) => {
    console.log(`student ${key}:${student[key]}`);
};
logStudentkey(student, 'name');
const workerIncome = {
    bonus: 8,
    salary: 12,
    sidehustle: 10
};
for (const revenue in workerIncome) {
    console.log(workerIncome[revenue]);
}
