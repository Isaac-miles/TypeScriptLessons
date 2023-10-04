const {log} = console
type singer ={
    name?:string,
    active:boolean,
    albums:(string | number)[]
}

let Tm:singer ={
    name: 'Timaya',
    active:true,
    albums:['trueStory', '1954']
}

const artist = (singer:singer)=>{
    if(singer.name){
        return `Hi ${singer.name.toString()}`

    }
    return `Hi`
}
log(artist(Tm))

enum nameEnum {name, age, level}