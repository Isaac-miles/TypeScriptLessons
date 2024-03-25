const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

const {log} = console;

async function getPokemon(){
    //the fetch api returns a readable streams of responses 
    const response = await fetch(POKE_URL)

    //the json recieves a readable stream of responses from the fetch interface and brings it to completion
    const data = response.json()
    log(data)
}