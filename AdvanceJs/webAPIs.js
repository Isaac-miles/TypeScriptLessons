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