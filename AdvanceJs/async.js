const {log} = console;
//callbacks are functions used for async functionality
//Promise in Js are Objects, they are native to the language as of ES2015, a promise can be in one of the three states, pending resolve(fulfilled) and rejected

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

fetch(`${BASE_URL}/1`)
.then((res)=>log(res))
.catch((err)=>log(err))

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