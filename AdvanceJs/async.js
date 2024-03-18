const {log} = console;
//callbacks are functions used for async functionality
//Promise in Js are Objects, they are native to the language as of ES2015, a promise can be in one of the three states, pending resolve(fulfilled) and rejected

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

fetch(`${BASE_URL}/1`)
.then((res)=>log(res))
.catch((err)=>log(err))

//promise chaining

 const fetchData = async()=>{
    try {
      const data = await fetch(`${BASE_URL}/1`)
      log(data)

      const data1 = await fetch(`${BASE_URL}/2`)
      log(data1)

      const data2 = await fetch(`${BASE_URL}/1f`)
        log(data2)
        
    } catch (error) {
        log(error)
    }
 }