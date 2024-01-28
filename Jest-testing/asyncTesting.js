
function fetchData(callback){
    setTimeout(()=>{
        callback("user data")
    },1000)
}

//Promise based function
function fetchPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("user data"),1000);
    });

}
function fetchPromise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject(()=>{throw new Error("error")}),1000);
    });

}

module.exports = {fetchData,fetchPromise,fetchPromise1}