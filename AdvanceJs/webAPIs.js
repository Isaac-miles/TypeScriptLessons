//Performance ApI
    //Allows measurement of the performance of web pages and web apps, it basically gives us access to very high precision timing data, and we can find the timing data on how long resources take to load, or how long function takes to run.
    
    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    
    const largeArray = Array.from({length:10000},()=>{
        return Math.floor(Math.random()*1000);
    })

    const arrayForBubbleSort = [...largeArray];
    const arrayForNativeSort = [...largeArray]

    performance.mark("nativeSortStart")
    arrayForNativeSort.sort((a,b)=>a-b);
    performance.mark("nativeSortEnds")

    performance.measure("Native sort Time","nativeSortStart","nativeSortEnds")

    performance.mark("bubbleSortStart")
    bubbleSort(arrayForBubbleSort);
    performance.mark("bubbleSortStop")

    performance.measure("Bubble sort Time","bubbleSortStart","bubbleSortStop")

    const nativeDuration =performance.getEntriesByName("Native sort Time")[0].duration;

    const bubbleDuration =performance.getEntriesByName("Bubble sort Time")[0].duration;
    
    // log("Native sort took ",nativeDuration)
    // log("bubble sort took ",bubbleDuration)

    //web Audio APi:Allows for the processing and synthesizing of audio in web applications.
    const context = new AudioContext();
    const slider = document.querySelector("#freqSlider");
    const playBtn = document.querySelector("#playBtn");
    const stopBtn = document.querySelector("#stopBtn");
    const freqLabel = document.querySelector("#freqLabel");

    let oscillator = null;
    playBtn.addEventListener("click",()=>{
        if(oscillator) return;
         oscillator = context.createOscillator();
         oscillator.type ="square";
         oscillator.frequency.value = slider.value;
         oscillator.connect(context.destination)
         oscillator.start();
    });

    slider.addEventListener("input",e =>{
        const frequency = e.target.value;
        freqLabel.textContent = `Frequency: ${frequency} Hz`
        if(oscillator){
            oscillator.frequency.value = frequency;
        }
    })

    stopBtn.addEventListener("click",()=>{
        if(oscillator){
            oscillator.stop()
            oscillator = null;
        }
    })

    //Canvas Api
    //enables drawing graphics via javascript and html <canvas> element.
    const canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    // ctx.fillStyle = "rbga(255,0,0,0.5)";
    // ctx.fillRect(0,0,200,80)

    ctx.fillStyle = "rbga(0,255,255,0.5)";
    // ctx.fillRect(100,50,200,80)
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 4;
    // ctx.fillRect(50,50,200,200);
    // ctx.clearRect(50,50,100,100)
    // ctx.strokeRect(50,50,100,100)

    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(100,100);
    ctx.lineTo(200,80);
    ctx.lineTo(200,40);
    // ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(145,145,50,0,2 * Math.PI);
    ctx.stroke();