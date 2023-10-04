const {log} = console
type One = string
type Two = string | number
type Three =' miles'

//convert to more or less specific
let a:One = 'mile'
let b = a as Two  //less specific type
let c = a as Three //more specific

let d = <One>'world'
let e = <string | number> 5

const addOrConcat = (a:number,b:number, c:'add' | 'concat'): string | number =>{
    if(c==='add')return a+b;
    return ''+a+b
}
let myVal:string = addOrConcat(2,2,'concat') as string

//Be careful! TS sees no problem - but a string is returned
let myVal1:number = addOrConcat(2,2,'concat') as number

//The DOM
const img = document.querySelector('img') !
const myImg = document.getElementById('#myImg') as HTMLImageElement
const myImg1 =<HTMLImageElement> document.getElementById('#myImg') as HTMLImageElement
img.src
myImg.src