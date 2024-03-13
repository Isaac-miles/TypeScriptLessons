const person = {
    name:'doe',
    city:'lagos',
    sing:function(){
        return `${this.name} sings Hellow world`
    }
}
function whatIsThis(){
    console.log('what is this',this)
}
// the general rule is the value of this will always be whats on this left handside eg the above window.whatIsThis this refered to the win obj