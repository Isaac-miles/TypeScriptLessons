   //Geolocation API: allows users to share their location with web applications

   const {log} = console;

    const navigateBtn = document.querySelector("#getLocation").addEventListener("click",()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayGeoData,
            function(err){
                log(err)
            })
        }
    });

    const displayGeoData = (position)=>{
        const {latitude,longitude} = position.coords;
        const displayArea = document.querySelector("#locationDisplay");
        displayArea.textContent = `Latitude: ${latitude}, longitude: ${longitude}`
    }