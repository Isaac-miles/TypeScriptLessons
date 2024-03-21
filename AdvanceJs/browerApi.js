//setTimeOut:execute a piece of code after a certain period has elapse.
function showNotification(message, duration){
    const notification = document.createElement("Div");
    notification.innerText=message;
    document.body.appendChild(notification);

    setTimeout(()=>{
        notification.remove()
    },duration)
}

//setInterval runs some functions repeatedly between some sets of intervals
function startCountDown(duration){
    const h1 = document.getElementById("timer")
    let secondsRemaining = duration;
   const interval = setInterval(()=>{
        h1.innerText = secondsRemaining;
        secondsRemaining -=1;

        if(secondsRemaining < 0) clearInterval(interval)
    },1000)

}

const cancelButton = document.querySelector("cancel");

const redirect = setTimeout(()=>{
    window.location.href = "http://www.google.com"
},5000)