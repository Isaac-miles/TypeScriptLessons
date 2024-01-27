
 const sum = (a, b)=>{
    return a + b
}

const throwAnException = (input) =>{
    if(typeof input !='number'){
        throw new Error("Invalid data")
    }
    
  }
  

module.exports = {sum,throwAnException};