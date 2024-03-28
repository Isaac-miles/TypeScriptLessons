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
            // log(devices)
        })
        .catch(err=>log(err.message))

        //Intersection Observer API: provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                log("INTERSECTION OBSERVED!!!");
                // log(entry)
            })
        })
        //lets say we have an advert we want to observe
        // const ad= document.querySelector(".add");
        // observer.observe(ad)

        //the instersectionObserver can also accepts a second arg, object, with props like threshold, which tells it how long the doc is visible before the callback fires up.

        const observer1 = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                log("INTERSECTION OBSERVED!!!");
                log(entry)
            })
        },{threshold:[0,0.25,0.5,0.75,1]})//you can also pass an array of threshold [0,0.5,1,1.5]

        let adViewTimes = [];
        let adVisibleStartTime;

        const addObserver = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                const {isIntersecting} = entry;
                if(isIntersecting){
                    //ad is visible
                    adVisibleStartTime = Date.now();
                }else if(adVisibleStartTime){
                    //ad has been visible, no longer os visible
                   let addViewDuration = Date.now()- adVisibleStartTime;

                   adViewTimes.push(addViewDuration);
                   log(`Ad was views for ${addViewDuration} ms`);
                   adVisibleStartTime = undefined;
                }
            })
        },{threshold:0.5})

        const ad= document.querySelector(".add");
        observer.observe(ad)

        //multiple entries
        const addObserver2 = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                const {isIntersecting} = entry;
                const {id} = entry.target

                if(isIntersecting){
                    log(id,'is visible');
                }else{
                    log(id,"add is not visible");
                }
            })
        },{threshold:0.5})

        const ads = document.querySelectorAll(".ad");
        ads.forEach((ad)=>observer.observe(ad))