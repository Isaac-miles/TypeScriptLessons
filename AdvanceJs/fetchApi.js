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

// fetch(POKE_URL)
//     .then((res)=>{
//         if(!res.ok){
//             throw new Error("Http error")
//         }
//         return res.json()
//     })
//     .then(data=>log(data))
//     .catch((e)=>{
//         log(e)
//     })

    async function getPokemonWithHeaders(){
        const headers = new Headers({"content-tye":"application/json"}); //using the new header standardizes the headers

        try {
                //the fetch api returns a readable streams of responses 
             const response = await fetch(POKE_URL,headers)
            if(!response.ok){
                throw new Error("Http error")
            }
        //the json receives a readable stream of responses from the fetch interface and brings it to completion
        const data = await response.json()
        log(data)
        } catch (error) {
            log(e)
        }
    
    }
    
    async function postData(){
        const newUser ={
            name:"miles",
            age:23,
            designation:"banker"
        }
        const res = await fetch("api",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newUser)
        });
        const data = await response.json();
        log(data)
    }

    //uploading files

    async function uploadFile(formData){
       
        try {
      
        const response = await fetch("api",{
            method:"Post",
            body: formData
        })
        const res = await response.json();
        } catch (error) {
            log("Error uploading file", file)
        }
    }

    const fileInput = document.querySelector("#fileUpload");
    fileInput.addEventListener("change",(e)=>{
        const formData = new FormData();
        formData.append("logo",fileInput.files[0])
        log(formData)
    })

    //storage
    //localStorage:allows web applications to store key-value pains in a web browser persistently accross sessions

    //sessionStorage: allows web applications to stor key-value pairs in a web browser for a single session