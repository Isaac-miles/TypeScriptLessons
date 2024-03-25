const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon(){
    //the fetch api returns a readable streams of responses 
    const response = await fetch(POKE_URL)
}