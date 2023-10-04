
class Coder{
    // name:string
    // music:string
    // age:number
    // lang: string
    secondLang!:string

    constructor(public readonly name:string, public music:string,private age:number, protected lang="Typescript"){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
   public getage= ()=>{
        return this.age
    }
}

const Isaac = new Coder('Dave','Pop', 28, 'Typescript')
console.log(Isaac.getage())
// console.log(Isaac.lang)

class FrontEnd extends Coder {
    constructor(public computer:string, name:string, age:number,music:string){
        super(name,music,age)
        this.computer = computer
    }
    public getLang(){
        return `I am a ${this.lang} dev`
    }
}
const Sera = new FrontEnd('Macbook Pro', 'Junior', 27, 'pop')
console.log(Sera.getLang())
// console.log(Sera.lang)
/* ---------------------------------------------------------- */

interface Artist {
    name:string
    instrument:string
    play(action:string):string
}

class Drummer implements Artist {
    name: string
    instrument: string

    constructor(name:string,  instrument:string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Shally = new Drummer('Shallipopi', 'drum')
console.log(Shally.play('drums'))
/* ---------------------------------------------------------- */
class Peeps {
    static count: number = 0
    static getCount(): number{
        return Peeps.count
    }
    public id:number
    constructor(public name:string){
        this.name = name
        this.id = ++Peeps.count
    }
}
const durelo = new Peeps('durelo')
const jack = new Peeps('jack')
const mic = new Peeps('mic')
console.log(Peeps.count)
console.log(jack.id)
console.log(mic.id)
console.log(durelo.id)
/* ---------------------------------------------------------- */

class Bands{
    private dataState:string[]

    constructor(){
        this.dataState = []
    }

    public get data():string[]{
        return this.dataState
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(el=>
            typeof el==='string')){
               this.dataState = value
                return
            }else throw new Error('Param is not an array of strings')
    }
}

const myBands = new Bands()
myBands.data=['Nel','Psquare']
console.log(myBands.data)
myBands.data = [...myBands.data, 'Tuface']
console.log(myBands.data)
