
function fetchData(callback){
    setTimeout(()=>{
        callback("user data")
    },1000)
}

module.exports = {fetchData}