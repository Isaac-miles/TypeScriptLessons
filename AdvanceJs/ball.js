const {log} = console;

const canvas = document.querySelector("#ballCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")
const balls = [];

class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 30 + 10;
        this.xVel = (Math.random()-0.5) *10;
        this.yVel = (Math.random()-0.5) *10;
    }

    static getRandomColor(){
        return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = Ball.getRandomColor()
        ctx.arc(this.x, this.y,this.size, 0, Math.PI*2 );
        ctx.fill()
    }
    update(){
        this.x += this.xVel;
        this.y -= this.yVel;
    }
}

    function loopBall(){
        for(let ball of balls){
            ball.update();
            ball.draw();
        }
    }
    canvas.addEventListener("click",(e)=>{
        const ball = new Ball(e.clientX, e.clientY);
        balls.push(ball);
    })