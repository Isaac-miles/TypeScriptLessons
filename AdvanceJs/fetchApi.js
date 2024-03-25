const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

const {log} = console;

async function getPokemon(){
    try {
            //the fetch api returns a readable streams of responses 
         const response = await fetch(POKE_URL)
        if(!response.ok){
            throw new Error("Http error")
        }
    //the json recieves a readable stream of responses from the fetch interface and brings it to completion
    const data = await response.json()
    log(data)
    } catch (error) {
        log(e)
    }

}

fetch(POKE_URL)
    .then((res)=>{
        if(!res.ok){
            throw new Error("Http error")
        }
        return res.json()
    })
    .then(data=>log(data))
    .catch((e)=>{
        log(e)
    })

    async function getPokemonWithHeaders(){
        const headers = new Headers({"content-tye":"application/json"});
        
        try {
                //the fetch api returns a readable streams of responses 
             const response = await fetch(POKE_URL)
            if(!response.ok){
                throw new Error("Http error")
            }
        //the json recieves a readable stream of responses from the fetch interface and brings it to completion
        const data = await response.json()
        log(data)
        } catch (error) {
            log(e)
        }
    
    }
    