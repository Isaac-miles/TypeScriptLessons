const {log} = console;

const canvas = document.querySelector("#ballCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")

class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 30 + 10;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y,10, 0, Math.PI*2 );
        ctx.fill()
    }
}

canvas.addEventListener("click",(e)=>{
    log("clicked", e.clientX,e.clientY)
    const ball = new Ball(e.clientX, e.clientY);
    ball.draw();
})