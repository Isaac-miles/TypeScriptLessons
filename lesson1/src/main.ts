const {log} = console
type singer ={
    name:string,
    active?:boolean,
    albums:(string | number)[]
}

let Tm:singer ={
    name: 'Timaya',
    active:true,
    albums:['trueStory', '1954']
}

const artist = (singer:singer)=>{
    return `Hi ${singer.name}`
}
log(artist(Tm))