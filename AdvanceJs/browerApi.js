const {log} = console;
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

const cancelButton = document.querySelector("#cancel");

// const redirect = setTimeout(()=>{
//     window.location.href = "http://www.google.com"
// },5000)

// cancelButton.addEventListener('click',()=>{
//     clearTimeout(redirect)
// })

//debouncing: essentially adding a pause before a function is ran or to make sure a function is not too called frequently
const search = document.getElementById("search")

function queryApi(searchItem){
    log("MAKING API REQUEST for ", searchItem)
}

// let debounceTimeout;
// search.addEventListener("input",()=>{
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(()=>{
//         queryApi();
//     },400)
// });

function debounce(callback, delay){
    let timeoutId;
    return (...args)=>{
        if(timeoutId) clearTimeout(timeoutId)

        timeoutId = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}
const debouncedQueryAPI = debounce(queryApi,300)

search.addEventListener("input",(e)=>{
    debouncedQueryAPI(e.target.value);
})

//Throttling: is a technique used to make sure a function is called at most one time within some duration.
function getRandomColor(){
    const palette = [
        "#FFADAD",
        "#FFADAD",
        "#FFADAD",
        "#392F5A",
        "#31A2AC",
        "#61C0BF",
        "#6B4226",
        "#D9BF77",
        "#ACD8AA",
        "#FFE156",
        "#6A0572",
        "#AB83A1",
    ];

    const randomIndex = Math.floor(Math.random() * palette.length);
    return palette[randomIndex]
}
const content = document.getElementById("content");

function loadMoreItems(){
    const scrollDistanceToBottom = document.documentElement.scrollHeight - window.screenY - window.innerHeight

    if(scrollDistanceToBottom < 200){
        log("loading data from an api!!");
        for(let i=0; i <10; i++){
            const item = document.createElement("div");
            item.classList.add("item")
            item.textContent = "Item " + (content.children.length + 1);
            item.style.backgroundColor = getRandomColor();
            content.appendChild(item);
        }
    }
}

//basic throttling technique
let isThrottled = false;
window.addEventListener("scroll", ()=>{
    if(!isThrottled){
        loadMoreItems();
        isThrottled = true;
        setTimeout(()=>{
            isThrottled = false;
        },300)
    }
});

function throttle(callback,delay = 500){
    let isThrottled = false;
    let savedArgs = null;

    const executeCallback = ()=>{
        if(savedArgs===null){
            isThrottled = false
        }else{
            callback(...savedArgs);
            savedArgs = null;
            setTimeout(executeCallback,delay);
        }
    }
    return(...args) =>{
        if(isThrottled){
            savedArgs = args;
            return;
        }
        callback(...args)
        isThrottled = true;
        setTimeout(executeCallback,delay)
    }
}

window.addEventListener("scroll",()=>{
    loadMoreItems();
})

//initial load
loadMoreItems();

//requestAnimation frame
const boxInterval = document.getElementById("boxInterval");
const boxAnimationFrame = document.getElementById("boxAnimationFrame");

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval(){
    boxInterval.style.transform = "rotate(" + intervalAngle + "deg)"
    intervalAngle +=2;
}
// Start the animations
// setInterval(animateWithInterval,16); //60 FPS (approximately)

function animateWithAnimationFrame(currentTime){
    //currentTime is passed automatically by the requestAnimationFrame,it provides a timeStamp, a very high resolution time stamp.

    log(currentTime)
    boxAnimationFrame.style.transform = "rotate(" + animationFrameAngle + "deg)"
    animationFrameAngle +=2
requestAnimationFrame(animateWithAnimationFrame)

}
//using animation frame
// requestAnimationFrame(animateWithAnimationFrame)
function smoothScrollToTop(){
    const duration = 1000;// duration in miliseconds;
    const start = window.scrollY;
    const end = 0;
    const change = end - start;
    let startTime = null;

    function animateScroll(currentTime){
        if(startTime===null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        log(timeElapsed);
        const progress = Math.min(timeElapsed/duration,1);

        window.scrollTo(0,start + change*progress);
        if(timeElapsed < duration){
            requestAnimationFrame(animateScroll)
        }
    }
    requestAnimationFrame(animateScroll);
}