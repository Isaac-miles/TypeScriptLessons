const {log} = console;
//callbacks are functions used for async functionality
//Promise in Js are Objects, they are native to the language as of ES2015, a promise can be in one of the three states, pending resolve(fulfilled) and rejected

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// fetch(`${BASE_URL}/1`)
// .then((res)=>log(res))
// .catch((err)=>log(err))

//promise chaining

const fetchData = async () => {
    try {
        const data = await fetch(`${BASE_URL}/1`);
        log(data);

        const data1 = await fetch(`${BASE_URL}/2`);
        log(data1);

        const response = await fetch(`${BASE_URL}/1f`);
        if (!response.ok) {
            throw new Error('Failed to fetch data2');
        }
        const data2 = await response.json();
        log(data2);
    } catch (error) {
        log("something went wrong:", error.message);
    }
};
//Promise.all accepts an array of promise and returns a new promise, the new promise will resolve when every promise in array resolves and will be rejected if any promise in array is rejected
const  plentyFetch = [
    fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/2`),
    fetch(`${BASE_URL}/3`),
    fetch(`${BASE_URL}/4`)
]

async function getLotsOfFetch(){
    try {
    //    const result = await Promise.all(plentyFetch)
    //    log("results",result)
    } catch (error) {
        log("one request failed")
    }
}
getLotsOfFetch()
//but sometimes you may want to send a bunch of promise calls, some may work and some wont and you want to handle them differently how do you handle this?
async function allSettle(){
    const GITHUB_BASE = "https://api.github.com";
    let el = fetch(`${GITHUB_BASE}/users/elie`);
    let miles = fetch(`${GITHUB_BASE}/users/isaac-miles`);
    let badUrl =fetch("http://fakenotasite.com");
    let colt =fetch(`${GITHUB_BASE}/users/colt`);
    let anotherBadUrl =fetch("http://anotherfakenotasite.com");

    let res = await Promise.allSettled([
        el,
        miles,
        badUrl,
        colt,
        anotherBadUrl
    ]);

    log(res)
    const fulfilled = res.filter((r)=>r.status=="fulfilled");
    const rejected = res.filter((r)=>r.status=="rejected");
    log(fulfilled)
    log(rejected)
}
//many calls, first one wins
//Promise.race accepts an array of promises and returns a new promise, this new promise will resolve or reject as soon as one promise in the array resolves or rejects, it doesn't wait for all of them, only the first one that either resolves or rejects
Promise.race(plentyFetch).
then(winner =>log(winner)).
catch(err=>log(err))

//building own promises: you can use promise with the new keyword to make your own promises,promise accepts a single function(call it fn) as an argument, fn accepts two functions as arg resolve and reject
const wait = (duration)=>{
    const p = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        // reject("this was rejected")
        resolve("This was resolved")
       },duration)
    });
    return p;
}

// async function demo(){
//     log("hi")
//     const val = await wait(2000)
//    log(val)
//     log("there")
// }
// wait(3000).then(r=>log(r))

//Nullish coalescing: operator(??) is a logicAL OPERATOR THAT returns its right hand operand when its left operand is null or undefined, and otherwise returns its left hand operator this is a way to handle default values more predictably than using the OR(||) operator.
const person ={
    name:"Anonymous",
    age:29
}
const username = person.firstName ?? "not applicable"
log(username)

//Array.prototype.at() allows us to access an array element at an index
const colors = ["red","blue","green"]
log(colors.at(-1))

//Logical OR assignment ||=
const db = {task:"",priority:"Top most"}

log(db.priority ||= "Less priority") //this is equivalent to
// db.priority || (db.priority ="Less")
 
let num = 9;
num &&=50 //assigns 50 to num if only num has a truty value

let loggedInUser = true;

if(loggedInUser){
    loggedInUser = {...loggedInUser,colorScheme:"purple"}
}
loggedInUser &&= {...loggedInUser,colorScheme:"red"}

log(loggedInUser)

let score;
score ??=0

function doSomeSetUp(options={timeOut:0,entries:0}){
    options.timeOut ??=3000; //this wont set timeout to 3s 
    options.entries??=5 // this  wont sets entries to 5
    log(options)
}
function doSomeSetUp(options={timeOut:0,entries:0}){
    options.timeOut ||=4000; //this sets timeout to 4s 
    options.entries ||=5 // this sets entries to 5
    log(options)
}
//Promise.any : takes an iterable of promise objects and returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected if all of the given promises are rejected
Promise.any([
    fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/2`),
    fetch(`${BASE_URL}/3`),
    fetch(`${BASE_URL}/4`)
]).
then((firstResolved)=>log("first to resolve",firstResolved))
.catch(err=>log('all of them failed',err))

//Generators and yield
//JavaScript can have generator functions-functions that return a generator that can be lazily looped over
 function* evens(n){
    while(n){
        yield n;
        n +=2;
    }

 }

 function* fibonacci(){
    let a=0, b=1;

    while(true){
        yield a;
        [a, b] = [b, a+b];
    }
 }

 const fibGen = fibonacci()
 fibGen.next()

 //practical example for using generators:lets get batch of images in 10s

 const allImages = Array.from(
    {length:1000},
    (_,i) =>`https://placeimg.com/640/480/any?image=${i}`
 );

 function* getBatchOfImages(images,batchSize=10){
    let  currentIndex = 0;
    while(currentIndex < images.length){
        yield images.slice(currentIndex,currentIndex+batchSize);
        currentIndex +=batchSize;
    }
 }

 const imageGen = getBatchOfImages(allImages);

 //Array.from: helps to generate array from a non array obj using an iterable
Array.from("Hello") //this creates an array e.g ['M','i',...]

const set = new Set([1,2,3,4,5])
Array.from(set)

//we can also pass a mapping function as a second arg that transforms each element eg
Array.from("abcd",x=>x.toLocaleUpperCase())

Array.from({length:5},(el,i)=>"miles".concat("wrld"+i))

log("-".repeat(20))
