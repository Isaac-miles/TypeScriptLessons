   //Geolocation API: allows users to share their location with web applications

   const {log} = console;

    const navigateBtn = document.querySelector("#getLocation").addEventListener("click",()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayGeoData,
            displayError)
        }
    });
    const displayArea = document.querySelector("#locationDisplay");
    const displayGeoData = (position)=>{
        const {latitude,longitude} = position.coords;
        displayArea.textContent = `Latitude: ${latitude}, longitude: ${longitude}`
    }

    const displayError=(error)=>{
        displayArea.textContent = error.message
    }

    //UserMedia
    const startStream = document.querySelector("#startStream").addEventListener("click",async()=>{
      const stream = await navigator.mediaDevices.getUserMedia({video:true})
        
      const videoElement = document.querySelector("#videoElement");
      videoElement.srcObject = stream;
    })