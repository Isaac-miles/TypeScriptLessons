let logs =console.log
const echo =<T>(arg:T):T=>arg

const isObj = <T>(arg:T):boolean=>{
    return (typeof arg ==='object' && !Array.isArray(arg) && arg !==null)
}

// logs(isObj(true))
// logs(isObj('jon'))
// logs(isObj([1,2,3]))
// logs(isObj({name:'jon'}))
// logs(isObj(null))

const isTrue =<T>(arg: T):{arg: T, is:boolean}=>{
    if(Array.isArray(arg) && !arg.length)return {arg, is:false}
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is:false}
    }

   return {arg, is: !!arg}
}
logs(isTrue(false))
logs(isTrue(0))
logs(isTrue(true))
logs(isTrue(1))
logs(isTrue('dave'))
logs(isTrue(''))
logs(isTrue(null))
logs(isTrue(undefined))
logs(isTrue({}))
logs(isTrue({name:'Dave'}))
logs(isTrue([]))
logs(isTrue([1,2,3]))
logs(isTrue(NaN))
logs(isTrue(-0))