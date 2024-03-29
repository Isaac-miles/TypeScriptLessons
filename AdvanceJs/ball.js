const {log} = console;

const canvas = document.querySelector("#ballCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")

class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

canvas.addEventListener("click",(e)=>{
    log("clicked", e.clientX,e.clientY)
    ctx.beginPath();
    ctx.arc( e.clientX,e.clientY,20,0,Math.PI*2);
    ctx.fill()
})