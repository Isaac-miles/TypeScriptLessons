   //Geolocation API: allows users to share their location with web applications

   const {log} = console;

    if(navigator.geolocation){
        log("access",navigator)
    }
    
    const navigateBtn = document.querySelector("#getLocation");
    