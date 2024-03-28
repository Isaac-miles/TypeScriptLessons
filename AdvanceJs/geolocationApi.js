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
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video:true})
        
            const videoElement = document.querySelector("#videoElement");
            videoElement.srcObject = stream;
        } catch (error) {
            log(error)
            document.querySelector("#errorText").textContent = error.message
        }
   
    })

    //if the user has multiple audio and media devices plugged in
    navigator.mediaDevices.enumerateDevices()
        .then((devices)=>{
            log(devices)
        })
        .catch(err=>log(err.message))

        //Intersection Observer API: provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport
        const observer = new IntersectionObserver((entries)=>{
            
        })