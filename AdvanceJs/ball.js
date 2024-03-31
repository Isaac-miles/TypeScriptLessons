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
        //check if its about to hit the canvas bound
        if((this.x + this.size)>=canvas.width || (this.x - this.size)<=0){
            this.xVel =-this.xVel
        }
        if((this.y + this.size)>=canvas.width || (this.y - this.size)<=0){
            this.yVel =-this.yVel
        }
        this.x += this.xVel;
        this.y -= this.yVel;

        if((this.y + this.size) < canvas.height){
            this.yVel += .5÷;
        }
    }
}

    function loopBall(){
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(0,0,canvas.width, canvas.height)
        for(let ball of balls){
            ball.update();
            ball.draw();
        }
        requestAnimationFrame(loopBall);
    }

    loopBall();

    canvas.addEventListener("click",(e)=>{
        const ball = new Ball(e.clientX, e.clientY);
        balls.push(ball);
    })